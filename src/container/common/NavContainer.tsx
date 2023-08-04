import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAllNotifications,
} from "../../features/notificationsSlice";

import Navbar from "../../components/common/Navbar";

const NavContainer = () => {
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

  return (
    <Navbar
      navigate={navigate}
      badge={unreadNotificationsBadge}
    />
  );
};

export default NavContainer;
