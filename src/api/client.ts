/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ClientConfig extends RequestInit {
  body?: any;
  headers?: {
    [key: string]: string;
  };
}

export interface ClientResponse {
  status: number;
  data: any;
  headers: Headers;
  url: string;
}

export async function client(endpoint: string, { body, ...customConfig }: ClientConfig = {}): Promise<ClientResponse> {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  let data : any;
  try {
    const response = await window.fetch(endpoint, config);
    data = response.json();
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err : unknown) {
    return Promise.reject((err as Error).message ?? data);
  }
}

client.get = function (endpoint: string, customConfig: ClientConfig = {}): Promise<ClientResponse> {
  return client(endpoint, { ...customConfig, method: 'GET' });
};

client.post = function (endpoint: string, body: any, customConfig: ClientConfig = {}): Promise<ClientResponse> {
  return client(endpoint, { ...customConfig, body });
};
