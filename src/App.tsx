import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { lazy } from "react";

import RootLayout from "./components/layout/RootLayout";

const PostRootLayout = lazy(() => import("./components/layout/PostRootLayout"));
const EditPostLayout = lazy(() => import("./components/layout/EditPostLayout"));
const UserRootLayout = lazy(() => import("./components/layout/UserRootLayout"));
const NotificationsRootLayout = lazy(
  () => import("./components/layout/NotificationsRootLayout")
);
const NewsRootLayout = lazy(() => import("./components/layout/NewsRootLayout"));
const Home = lazy(() => import("./container/home/HomeContainer"));
const AddPost = lazy(() => import("./container/post/AddPostFormContainer"));
const SinglePost = lazy(
  () => import("./container/post/SinglePostPageContainer")
);
const EditPost = lazy(() => import("./container/post/EditPostFormContainer"));
const UserList = lazy(() => import("./container/users/UserListContainer"));
const UserPage = lazy(() => import("./container/users/UserPageContainer"));
const NewsList = lazy(() => import("./container/news/NewsListContainer"));
const NewsPage = lazy(() => import("./components/news/NewsPage"));
const NotificationList = lazy(
  () => import("./container/notifications/NotificationsListContainer")
);
const NotFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: < RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "posts",
        element: <PostRootLayout />,
        children: [
          {
            index: true,
            element: <AddPost />,
          },
          {
            path: ":postId",
            element: <SinglePost />,
          },
        ],
      },
      {
        path: "editPost",
        element: <EditPostLayout />,
        children: [
          {
            path: ":postId",
            element: <EditPost />,
          },
        ],
      },
      {
        path: "users",
        element: <UserRootLayout />,
        children: [
          {
            index: true,
            element: <UserList />,
          },
          {
            path: ":userId",
            element: <UserPage />,
          },
        ],
      },
      {
        path: "news",
        element: <NewsRootLayout />,
        children: [
          {
            index: true,
            element: <NewsPage />,
          },
          {
            path: ":category",
            element: <NewsList />,
          },
        ],
      },
      {
        path: "notifications",
        element: <NotificationsRootLayout />,
        children: [
          {
            index: true,
            element: <NotificationList />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <title>Palette</title>
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
