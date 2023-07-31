import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import notificationReducer from "../features/notifications/notificationsSlice";
import { PostListsType } from "../type/postType";
import { UserListType } from "../type/userType";
import { NotificationListType } from "../type/NotificationsType";
import { useDispatch } from "react-redux";

export type RootStateType = {
  posts: PostListsType;
  users: UserListType;
  notifications: NotificationListType;
};

const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  notifications: notificationReducer,
});

const persistConfig = {
  key: "root", // sessionStorage key
  storage: sessionStorage, // sessionStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
