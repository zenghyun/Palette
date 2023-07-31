import { rest, setupWorker } from 'msw'
import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data'
import { nanoid } from '@reduxjs/toolkit'
import faker from 'faker'
import seedrandom from 'seedrandom'
import { Server as MockSocketServer } from 'mock-socket'
import { setRandom } from 'txtgen'

import { parseISO } from 'date-fns'

faker.locale = "ko";

const NUM_USERS = 10
// const POSTS_PER_USER = line 194
const RECENT_NOTIFICATIONS_DAYS = 7

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000

/* RNG setup */

// Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.
const useSeededRNG = true
let rng = seedrandom()

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed')
  let seedDate

  if (randomSeedString) {
    seedDate = new Date(randomSeedString)
  } else {
    seedDate = new Date()
    randomSeedString = seedDate.toISOString()
    localStorage.setItem('randomTimestampSeed', randomSeedString)
  }

  rng = seedrandom(randomSeedString)
  setRandom(rng)
  faker.seed(seedDate.getTime())
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(rng() * (max - min + 1)) + min
}

const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1)
  return array[index]
}

/* MSW Data Model Setup */

export const db = factory({
  user: {
    id: primaryKey(nanoid),
    firstName: String,
    lastName: String,
    name: String,
    username: String,
    posts: manyOf('post'),
  },
  post: {
    id: primaryKey(nanoid),
    title: String,
    date: String,
    content: String,
    reactions: oneOf('reaction'),
    comments: manyOf('comment'),
    user: oneOf('user'),
  },
  comment: {
    id: primaryKey(String),
    date: String,
    text: String,
    post: oneOf('post'),
  },
  reaction: {
    id: primaryKey(nanoid),
    thumbsUp: Number,
    hooray: Number,
    heart: Number,
    rocket: Number,
    eyes: Number,
    post: oneOf('post'),
  },
})

const customFirstName = [
  '김',
  '이',
  '박',
  '최',
  '정',
  '한',
  '강',
  '송',
  '유',
  '임',
];
const customLastName = [
  '정현',
  '시온',
  '승민',
  '준영',
  '민준',
  '지우',
  '현우',
  '예준',
  '서진',
  '수진',
  '예은',
  '성민',
  '지훈'
];

const createUserData = () => {
  const firstName = faker.random.arrayElement(customFirstName);
  const lastName = faker.random.arrayElement(customLastName);

  return {
    firstName,
    lastName,
    name: `${firstName}${lastName} `,
    username: faker.internet.userName(),
  }
}

const customPost = {
  post1: {
    title: "오늘의 날씨는 화창하군요 ☀️",
    content: "오늘은 맑은 날씨가 기분 좋게 반겨주고 있습니다. 햇빛이 화사하게 빛나며, 구름 한 점 없이 푸른 하늘이 펼쳐져 있어요. 날씨가 이렇게 좋으면 나들이를 하고 싶어집니다. 햇빛 아래서 산책을 하거나 카페에서 커피 한 잔 마시면서 즐겁게 시간을 보낼 수 있겠죠? 날씨가 이렇게 좋으니 기분도 상쾌하고, 하루가 더 행복해지는 것 같아요."
  },
  post2: {
    title: "맛있는 카페 추천해주세요! ☕️",
    content: "오늘은 맛있는 커피를 마시기 위해 카페를 찾아 헤매고 있어요. 혹시 추천해 줄만한 좋은 카페가 있을까요? 분위기가 좋고 특별한 커피가 있는 곳을 찾고 있어요. 따뜻한 라떼나 상큼한 아이스 커피, 맛있는 디저트도 함께 즐기면서 편안한 시간을 보내고 싶어요. 카페의 분위기가 느껴지는 추천과 함께 소중한 카페 탐방의 시간을 만끽하고 싶습니다."
  },
  post3: {
    title: "주말에 뭐하고 놀까요? 🎉",
    content: "주말이 다가오면서 기대가 되네요. 주말에는 무엇을 하고 놀지 고민중이에요. 친구들과 함께 약속을 잡고 놀기도 좋지만, 집에서 편안하게 쉬는 것도 좋아요. 영화를 보거나, 책을 읽거나, 취미 생활을 즐기면서 즐거운 주말을 보낼 계획이에요. 맑은 날이라면 나들이를 떠나서 자연을 즐기고 싶기도 하고요. 주말에는 마음껏 즐겁고 여유롭게 보내고 싶어요."
  },
  post4: {
    title: "드라이브 갈 때 듣기 좋은 노래 추천해주세요 🚗🎶",
    content: "드라이브를 즐기는데 좋은 노래를 찾고 있어요. 운전하면서 들으면 기분이 좋아지는 노래가 있으면 추천해주세요. 경치 좋은 도로를 달리면서 좋은 음악과 함께 마음을 편하게 만들고 싶어요. 감성적인 발라드부터 신나는 팝송까지, 다양한 스타일의 노래를 듣고 싶어요. 드라이브를 더욱 즐길 수 있는 음악과 함께 멋진 시간을 만들어보려고 해요."
  },
  post5: {
    title: "오늘의 핸드폰 배경화면 📱✨",
    content: "오늘의 핸드폰 배경화면을 바꿔봤어요. 아름다운 자연 풍경이나 귀여운 동물 사진, 그림 같은 추상적인 이미지 등 다양한 배경화면을 시도해보고 있어요. 새로운 배경화면을 바꾸면 기분이 상쾌해지고 핸드폰을 켤 때마다 행복한 느낌이 들어요. 매일매일 새로운 배경화면과 함께 달라지는 핸드폰의 분위기를 즐기고 있어요."
  },
  post6: {
    title: "요즘 취미가 되는 책 추천해주세요 📚🤔",
    content: "최근에 책 읽는 것에 빠져있어요. 새로운 책을 발견하고 싶어서요. 혹시 추천해 줄 만한 재미있는 책이 있을까요? 로맨스, 판타지, 추리 소설, 자기계발 등 다양한 장르의 책을 즐겨 읽고 있어요. 책 속의 이야기에 빠져들면 시간 가는 줄 모르죠. 여러분들의 추천을 받아서 다양한 책 세계를 탐험하고 싶습니다."
  },
  post7: {
    title: "맛집 탐방 중! 🍔🍕",
    content: "오늘은 친구들과 함께 맛집 탐방 중이에요. 다양한 음식을 맛보고 싶어서 맛집을 찾아 다니고 있어요. 특별한 음식이나 유명한 맛집도 좋지만, 숨은 맛집도 찾아보고 싶어요. 한국 음식부터 서양 음식까지, 다양한 맛과 향을 즐기며 미식의 세계를 탐험하고 있습니다."
  },
  post8: {
    title: "평일의 작은 행복은 무엇인가요? 😊",
    content: "평일에도 작은 행복을 찾고 즐기려고 노력하고 있어요. 아침에 일어나 자연의 아침 햇빛을 보면서 시작하는 하루, 커피 한 잔과 함께하는 조용한 시간, 업무를 마치고 푹신한 침대에 누워 휴식을 즐기는 시간 등 등등. 평일에도 느끼는 작은 행복들이 많아요. 마음에 드는 노래를 듣거나 취미를 즐기는 시간도 평일을 즐겁게 해줘요."
  },
  post9: {
    title: "오늘의 패션 코디 💃🕺",
    content: "오늘은 무슨 옷을 입고 나왔는지 패션 코디를 보여드려요. 스타일에 따라 다양한 옷을 입고 다녀요. 귀여운 룩, 클래식한 룩, 스포티한 룩 등 하루하루 다른 스타일로 변신해보고 있어요. 패션 코디를 통해 내가 원하는 이미지를 표현하고 세상과 소통하는 재미를 느끼고 있습니다."
  },
  post10: {
    title: "영화 추천 받아요! 🎬🍿",
    content: "오늘은 영화를 보기로 결정했어요. 혹시 좋은 영화 추천해 주시면 감사하겠어요! 로맨스, 액션, 코미디, 스릴러 등 장르는 상관없이 다양한 영화를 즐겨봐요. 좋은 영화를 보면서 즐거운 시간을 보내고 싶어요. 여러분의 추천으로 다양한 영화를 경험해보고 싶습니다."
  }
};



const createPostData = (user) => {
  const customPostArray = Object.values(customPost);
  const randomPost = faker.random.arrayElement(customPostArray);
  return {
    title: randomPost.title,
    date: faker.date.recent(RECENT_NOTIFICATIONS_DAYS).toISOString(),
    user,
    content: randomPost.content,
    reactions: db.reaction.create(),
  }
}

// Create an initial set of users and posts
for (let i = 0; i < NUM_USERS; i++) {
  const author = db.user.create(createUserData())
  const POSTS_PER_USER = Math.floor(Math.random() * 7) + 1;
  for (let j = 0; j < POSTS_PER_USER; j++) {
    const newPost = createPostData(author)
    db.post.create(newPost)
  }
}

const serializePost = (post) => ({
  ...post,
  user: post.user.id,
})

/* MSW REST API Handlers */

export const handlers = [
  rest.get('/fakeApi/posts', function (req, res, ctx) {
    const posts = db.post.getAll().map(serializePost)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(posts))
  }),
  rest.post('/fakeApi/posts', function (req, res, ctx) {
    const data = req.body

    if (data.content === 'error') {
      return res(
        ctx.delay(ARTIFICIAL_DELAY_MS),
        ctx.status(500),
        ctx.json('Server error saving this post!')
      )
    }

    data.date = new Date().toISOString()

    const user = db.user.findFirst({ where: { id: { equals: data.user } } })
    data.user = user
    data.reactions = db.reaction.create()

    const post = db.post.create(data)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(serializePost(post)))
  }),
  rest.get('/fakeApi/posts/:postId', function (req, res, ctx) {
    const post = db.post.findFirst({
      where: { id: { equals: req.params.postId } },
    })
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(serializePost(post)))
  }),
  rest.patch('/fakeApi/posts/:postId', (req, res, ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...data } = req.body
    const updatedPost = db.post.update({
      where: { id: { equals: req.params.postId } },
      data,
    })
    return res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json(serializePost(updatedPost))
    )
  }),

  rest.get('/fakeApi/posts/:postId/comments', (req, res, ctx) => {
    const post = db.post.findFirst({
      where: { id: { equals: req.params.postId } },
    })
    return res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json({ comments: post.comments })
    )
  }),

  rest.post('/fakeApi/posts/:postId/reactions', (req, res, ctx) => {
    const postId = req.params.postId
    const reaction = req.body.reaction
    const post = db.post.findFirst({
      where: { id: { equals: postId } },
    })

    const updatedPost = db.post.update({
      where: { id: { equals: postId } },
      data: {
        reactions: {
          ...post.reactions,
          [reaction]: (post.reactions[reaction] += 1),
        },
      },
    })

    return res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json(serializePost(updatedPost))
    )
  }),
  rest.get('/fakeApi/notifications', (req, res, ctx) => {
    const numNotifications = getRandomInt(1, 5)

    let notifications = generateRandomNotifications(
      undefined,
      numNotifications,
      db
    )

    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(notifications))
  }),
  rest.get('/fakeApi/users', (req, res, ctx) => {
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(db.user.getAll()))
  }),
]

export const worker = setupWorker(...handlers)
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted

/* Mock Websocket Setup */

const socketServer = new MockSocketServer('ws://localhost')

let currentSocket

const sendMessage = (socket, obj) => {
  socket.send(JSON.stringify(obj))
}

// Allow our UI to fake the server pushing out some notifications over the websocket,
// as if other users were interacting with the system.
const sendRandomNotifications = (socket, since) => {
  const numNotifications = getRandomInt(1, 5)

  const notifications = generateRandomNotifications(since, numNotifications, db)

  sendMessage(socket, { type: 'notifications', payload: notifications })
}

export const forceGenerateNotifications = (since) => {
  sendRandomNotifications(currentSocket, since)
}

socketServer.on('connection', (socket) => {
  currentSocket = socket

  socket.on('message', (data) => {
    const message = JSON.parse(data)

    switch (message.type) {
      case 'notifications': {
        const since = message.payload
        sendRandomNotifications(socket, since)
        break
      }
      default:
        break
    }
  })
})

/* Random Notifications Generation */

const notificationTemplates = [
  '님이 게시글을 좋아합니다.',
  '님이 게시글을 남겼습니다.',
  `님이 접속하였습니다.`,
]

function generateRandomNotifications(since, numNotifications, db) {
  const now = new Date()
  let pastDate

  if (since) {
    pastDate = parseISO(since)
  } else {
    pastDate = new Date(now.valueOf())
    pastDate.setMinutes(pastDate.getMinutes() - 15)
  }

  // Create N random notifications. We won't bother saving these
  // in the DB - just generate a new batch and return them.
  const notifications = [...Array(numNotifications)].map(() => {
    const user = randomFromArray(db.user.getAll())
    const template = randomFromArray(notificationTemplates)
    return {
      id: nanoid(),
      date: faker.date.between(pastDate, now).toISOString(),
      message: template,
      user: user.id,
    }
  })

  return notifications
}
