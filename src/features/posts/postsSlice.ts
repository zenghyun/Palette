import { PayloadAction, createSlice, nanoid, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { client } from "../../api/client";
import { RootStateType } from "../../app/store";
import { PostListsType, PostStateType,  } from "../../type/postType";

const initialState: PostListsType = {
  posts: [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts');
  return response.data
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async initialPost => {
  const response = await client.post('/fakeApi/posts', initialPost);
  return response.data;
});



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<PostStateType>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post : PostStateType) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post : PostStateType) => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array 
      state.posts = state.posts.concat(action.payload);
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error  = action.error.message;
    })
    .addCase(addNewPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    })
  }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state: RootStateType) => state.posts.posts;

export const selectPostById = (state: RootStateType, postId: string | undefined) =>
  state.posts.posts.find((post: PostStateType) => post.id === postId);

export const selectPostsByUser = createSelector(
  [selectAllPosts, (_state, userId) => userId],
  (posts, userId) => posts.filter((post: PostStateType) => post.user === userId)
);