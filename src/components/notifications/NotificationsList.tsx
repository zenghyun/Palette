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

  .emptyNotifiList {
    color: red;
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
  renderedNotifications: JSX.Element[] | null;
}) => {
  if(renderedNotifications === null || renderedNotifications.length === 0) {
    return (
      <NotificationsListBlock>
      <h2>Notifications</h2>
      <div className="notifiList">
        <span className="emptyNotifiList">
            알림이 존재하지 않습니다.  <br/>
            게시글의 reaction button을 누르거나, <br/>
            새로운 게시글을 작성하면 알림을 받을 수 있습니다.
        </span>
        </div>
    </NotificationsListBlock>
    )
  }

  return (
    <NotificationsListBlock>
      <h2>Notifications</h2>
      <div className="notifiList">{renderedNotifications}</div>
    </NotificationsListBlock>
  );
};

export default NotificationsList;
