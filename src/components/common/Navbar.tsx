import { useMemo } from 'react';
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { fetchNotifications, selectAllNotifications } from '../../features/notifications/notificationsSlice';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const notifications = useSelector(selectAllNotifications);
  const numUnreadNotifications = useMemo(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);
  let unreadNotificationsBadge; 

  if(numUnreadNotifications > 0) {
    unreadNotificationsBadge = <span className='badge'>{numUnreadNotifications}</span>
  }
  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  };

  return (
    <nav>
      <section>
        <h1>Palette</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/posts">Add Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </div>
          <button className='button' onClick={fetchNewNotifications}>
         Notifications {unreadNotificationsBadge}
          </button>
        </div>
      </section>
    </nav>
  )
}