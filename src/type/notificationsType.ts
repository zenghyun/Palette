export type NotificationType = {
  id: string;
  date: string;
  message: string;
  user: string;
  notifications: string;
  read: boolean;
  isNew: boolean;
};

export type NotificationListType = {
  notifications: Array<NotificationType>;
};
