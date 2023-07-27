import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PostsList from "./components/posts/PostsList";
import RootLayout from "./components/common/RootLayout";
import SinglePostPage from "./components/posts/SinglePostPage";
import PostRootLayout from "./components/posts/PostRootLayout";
import EditPostLayout from "./components/posts/EditPostLayout";
import EditPostForm  from "./components/posts/EditPostForm";
import UserRootLayout from "./components/users/UserRootLayout";
import UsersList from "./components/users/UserList";
import UserPage from "./components/users/UserPage";
import NotificationsList from "./components/notifications/NotificationsList";
import { AddPostForm } from "./components/posts/AddPostForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <PostsList /> },
      {
        path: "posts",
        element: <PostRootLayout />,
        children: [
          {
            index: true,
            element: <AddPostForm />,
          },
          {
            path: ":postId",
            element: <SinglePostPage />,
          },
        ],
      },
      {
        path:"editPost",
        element: <EditPostLayout />,
        children: [
          {
            path: ":postId",
            element: <EditPostForm />
          }
        ]
      },
      {
        path: "users",
        element: <UserRootLayout />,
        children: [
          {
            index: true,
            element: <UsersList />,
          }, 
          {
            path: ":userId",
            element: <UserPage />
          }
        ]
      },
      {
        path: "notifications",
        element: <NotificationsList />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
