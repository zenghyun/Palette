import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import RootLayout from "./components/common/RootLayout";
import PostRootLayout from "./components/post/PostRootLayout";
import EditPostLayout from "./components/post/EditPostLayout";
import UserRootLayout from "./components/users/UserRootLayout";
import NotificationsRootLayout from "./components/notifications/NotificationsRootLayout";
import SinglePostPageContainer from "./container/post/SinglePostPageContainer";
import UserListContainer from "./container/users/UserListContainer";
import UserPageContainer from "./container/users/UserPageContainer";
import NewsRootLayout from "./components/news/NewsRootLayout";
import NewsPage from "./components/news/NewsPage";
import HomeContainer from "./container/home/HomeContainer";
import NewsListContainer from "./container/news/NewsListContainer";
import NotificationsListContainer from "./container/notifications/NotificationsListContainer";
import AddPostFormContainer from "./container/post/AddPostFormContainer";
import EditPostFormContainer from "./container/post/EditPostFormContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeContainer /> },
      {
        path: "posts",
        element: <PostRootLayout />,
        children: [
          {
            index: true,
            element: <AddPostFormContainer />,
          },
          {
            path: ":postId",
            element: <SinglePostPageContainer />,
          },
        ],
      },
      {
        path: "editPost",
        element: <EditPostLayout />,
        children: [
          {
            path: ":postId",
            element: <EditPostFormContainer />,
          },
        ],
      },
      {
        path: "users",
        element: <UserRootLayout />,
        children: [
          {
            index: true,
            element: <UserListContainer />,
          },
          {
            path: ":userId",
            element: <UserPageContainer />,
          },
        ],
      },
      {
        path: "notifications",
        element: <NotificationsRootLayout />,
        children: [
          {
            index: true,
            element: <NotificationsListContainer />,
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
            element: <NewsListContainer />,
          },
        ],
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
