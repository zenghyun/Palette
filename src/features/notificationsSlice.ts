import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";
import {
  NotificationListType,
  NotificationType,
} from "../type/notificationsType";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { getState }) => {
    const Root = getState() as NotificationListType;
    const allNotifications = selectAllNotifications(Root);
    const [latesNotification] = allNotifications;
    const latestTimestamp = latesNotification ? latesNotification.date : "";
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    );
    return response.data;
  }
);

const initialState: NotificationType[] = [];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    allNotificationsRead(state) {
      state.forEach((notification) => {
        notification.read = true;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.push(...action.payload);
      state.forEach((notification) => {
        notification.isNew = !notification.read;
      });
      state.sort((a: NotificationType, b: NotificationType) =>
        b.date.localeCompare(a.date)
      );
    });
  },
});

export const { allNotificationsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;

export const selectAllNotifications = (state: NotificationListType) =>
  state.notifications;
