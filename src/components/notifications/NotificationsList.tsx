import { styled } from "styled-components";

const NotificationsListBlock = styled.section`
  .notification {
    border: 1px solid #eee;
    padding: 0.5rem;
  }

  .notification + .notification {
    border-top: none;
  }

  .notifiList {
    width: 320px;
    overflow: hidden auto;
    height: 700px;
  }
  .notification.new {
    background-color: rgba(29, 161, 242, 0.1);
  }

  @media (max-width: 576px) {
    .notifiList {
      height: 400px;
    }
  }
`;

const NotificationsList = ({
  renderedNotifications,
}: {
  renderedNotifications: JSX.Element[];
}) => {
  return (
    <NotificationsListBlock>
      <h2>Notifications</h2>
      <div className="notifiList">{renderedNotifications}</div>
    </NotificationsListBlock>
  );
};

export default NotificationsList;
