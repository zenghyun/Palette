import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/client';
import { UserStateType, UserListType } from '../type/userType';

const initialState = [] as Array<UserStateType>;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users');
  return response.data;
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.fulfilled, (_state, action) => {
      return action.payload;
    })
  }
  
})

export default usersSlice.reducer;

export const selectAllUsers = (state: UserListType) => state.users;

export const selectUserById = (state: UserListType, userId: string | undefined) =>
  state.users.find((user: UserStateType) => user.id === userId);