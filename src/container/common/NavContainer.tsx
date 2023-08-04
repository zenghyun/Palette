import { useMemo } from "react";
import { useAppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  fetchNotifications,
  selectAllNotifications,
} from "../../features/notificationsSlice";

import Navbar from "../../components/common/Navbar";

const NavContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notifications = useSelector(selectAllNotifications);

  const numUnreadNotifications = useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }
  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };

  return (
    <Navbar
      navigate={navigate}
      badge={unreadNotificationsBadge}
      newNotification={fetchNewNotifications}
    />
  );
};

export default NavContainer;
