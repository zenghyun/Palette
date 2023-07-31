import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../features/users/usersSlice";
import SearchUser from "./SearchUser";

const UsersList = () => {
    const users = useSelector(selectAllUsers);

    const renderedUsers = users.map(user => (
        <li key={user.id} className="userList" data-name={user.name}>
            <Link to={`/users/${user.id}`} >
                {user.name}
            </Link>
        </li>
    ));

    return (
        <section>
            <h2>Paletter</h2>
            <SearchUser />
            <ul>{renderedUsers}</ul>
        </section>
    )
};

export default UsersList;

