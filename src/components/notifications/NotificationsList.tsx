import { styled } from "styled-components";

const NotificationsListBlock = styled.section`
  .notification {
    border: 1px solid #eee;
    padding: 0.5rem;
  }

  .notificationsList .notification + .notification {
    border-top: none;
  }

  .notification.new {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

const NotificationsList = ({
  renderedNotifications,
}: {
  renderedNotifications: JSX.Element[];
}) => {
  return (
    <NotificationsListBlock className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </NotificationsListBlock>
  );
};

export default NotificationsList;
