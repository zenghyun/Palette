const INTEGRITY_CHECKSUM = "3d6b9f06410d179a7f7404d4bf4c3c70";
const activeClientIds = new Set();

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", async function (event) {
  const clientId = event.source.id;

  if (!clientId || !self.clients) {
    return;
  }

  const client = await self.clients.get(clientId);

  if (!client) {
    return;
  }

  const allClients = await self.clients.matchAll({
    type: "window",
  });

  switch (event.data) {
    case "KEEPALIVE_REQUEST": {
      sendToClient(client, {
        type: "KEEPALIVE_RESPONSE",
      });
      break;
    }

    case "INTEGRITY_CHECK_REQUEST": {
      sendToClient(client, {
        type: "INTEGRITY_CHECK_RESPONSE",
        payload: INTEGRITY_CHECKSUM,
      });
      break;
    }

    case "MOCK_ACTIVATE": {
      activeClientIds.add(clientId);

      sendToClient(client, {
        type: "MOCKING_ENABLED",
        payload: true,
      });
      break;
    }

    case "MOCK_DEACTIVATE": {
      activeClientIds.delete(clientId);
      break;
    }

    case "CLIENT_CLOSED": {
      activeClientIds.delete(clientId);

      const remainingClients = allClients.filter((client) => {
        return client.id !== clientId;
      });

      if (remainingClients.length === 0) {
        self.registration.unregister();
      }

      break;
    }
  }
});

self.addEventListener("fetch", function (event) {
  const { request } = event;
  const accept = request.headers.get("accept") || "";

  if (accept.includes("text/event-stream")) {
    return;
  }

  if (request.mode === "navigate") {
    return;
  }

  if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
    return;
  }

  if (activeClientIds.size === 0) {
    return;
  }

  const requestId = Math.random().toString(16).slice(2);

  event.respondWith(
    handleRequest(event, requestId).catch((error) => {
      if (error.name === "NetworkError") {
        console.warn(
          '[MSW] Successfully emulated a network error for the "%s %s" request.',
          request.method,
          request.url
        );
        return;
      }

      console.error(
        `\
[MSW] Caught an exception from the "%s %s" request (%s). This is probably not a problem with Mock Service Worker. There is likely an additional logging output above.`,
        request.method,
        request.url,
        `${error.name}: ${error.message}`
      );
    })
  );
});

async function handleRequest(event, requestId) {
  const client = await resolveMainClient(event);
  const response = await getResponse(event, client, requestId);

  if (client && activeClientIds.has(client.id)) {
    (async function () {
      const clonedResponse = response.clone();
      sendToClient(client, {
        type: "RESPONSE",
        payload: {
          requestId,
          type: clonedResponse.type,
          ok: clonedResponse.ok,
          status: clonedResponse.status,
          statusText: clonedResponse.statusText,
          body:
            clonedResponse.body === null ? null : await clonedResponse.text(),
          headers: Object.fromEntries(clonedResponse.headers.entries()),
          redirected: clonedResponse.redirected,
        },
      });
    })();
  }

  return response;
}

async function resolveMainClient(event) {
  const client = await self.clients.get(event.clientId);

  if (client?.frameType === "top-level") {
    return client;
  }

  const allClients = await self.clients.matchAll({
    type: "window",
  });

  return allClients
    .filter((client) => {
      return client.visibilityState === "visible";
    })
    .find((client) => {
      return activeClientIds.has(client.id);
    });
}

async function getResponse(event, client, requestId) {
  const { request } = event;
  const clonedRequest = request.clone();

  function passthrough() {
    const headers = Object.fromEntries(clonedRequest.headers.entries());

    delete headers["x-msw-bypass"];

    return fetch(clonedRequest, { headers });
  }

  if (!client) {
    return passthrough();
  }

  if (!activeClientIds.has(client.id)) {
    return passthrough();
  }

  if (request.headers.get("x-msw-bypass") === "true") {
    return passthrough();
  }

  const clientMessage = await sendToClient(client, {
    type: "REQUEST",
    payload: {
      id: requestId,
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      cache: request.cache,
      mode: request.mode,
      credentials: request.credentials,
      destination: request.destination,
      integrity: request.integrity,
      redirect: request.redirect,
      referrer: request.referrer,
      referrerPolicy: request.referrerPolicy,
      body: await request.text(),
      bodyUsed: request.bodyUsed,
      keepalive: request.keepalive,
    },
  });

  switch (clientMessage.type) {
    case "MOCK_RESPONSE": {
      return respondWithMock(clientMessage.data);
    }

    case "MOCK_NOT_FOUND": {
      return passthrough();
    }

    case "NETWORK_ERROR": {
      const { name, message } = clientMessage.data;
      const networkError = new Error(message);
      networkError.name = name;

      throw networkError;
    }
  }

  return passthrough();
}

function sendToClient(client, message) {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();

    channel.port1.onmessage = (event) => {
      if (event.data && event.data.error) {
        return reject(event.data.error);
      }

      resolve(event.data);
    };

    client.postMessage(message, [channel.port2]);
  });
}

function sleep(timeMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
}

async function respondWithMock(response) {
  await sleep(response.delay);
  return new Response(response.body, response);
}
