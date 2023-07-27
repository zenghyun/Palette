import { useSelector } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";
import { selectAllUsers } from "../../features/users/usersSlice";
import { NotificationType, selectAllNotifications, allNotificationsRead } from "../../features/notifications/notificationsSlice";
import { useAppDispatch } from "../../app/store";
import { useLayoutEffect } from "react";
import classnames from 'classnames'

const NotificationsList = () => {
    const notifications = useSelector(selectAllNotifications);
    const users = useSelector(selectAllUsers);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(allNotificationsRead())
    },[dispatch]);

    const renderedNotifications = notifications.map((notification : NotificationType) => {
        const date = parseISO(notification.date);
        const timeAgo = formatDistanceToNow(date);
        const user = users.find(user => user.id === notification.user) || {
            name : "Unknown User"
        };

        const notificationClassname = classnames('notification', {
            new: notification.isNew
        });


        return (
            <div key={notification.id} className={notificationClassname}>
                <div>
                    <b>{user.name}</b> {notification.message}
                </div>
                <div title={notification.date}>
                    <i>{timeAgo} ago</i>
                </div>
            </div>
        )
    });
    return (
        <section className="notificationsList">
            <h2>Notifications</h2>
            {renderedNotifications}
        </section>
    );
};

export default NotificationsList;