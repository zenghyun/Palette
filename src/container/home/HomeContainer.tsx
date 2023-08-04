import { CSSProperties, useEffect } from "react";
import { useSelector } from "react-redux";
import { FixedSizeList } from "react-window";
import { PostStateType } from "../../type/postType";
import { RootStateType } from "../../app/store";
import Spinner from "../../components/common/Spinner";
import { useAppDispatch } from "../../app/store";
import { selectAllPosts, fetchPosts } from "../../features/postsSlice";
import { fetchUsers } from "../../features/usersSlice";
import PostExcerpt from "../../components/home/PostExcerpt";

import Home from "../../components/home/Home";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state: RootStateType) => state.posts.status);
  const error = useSelector((state: RootStateType) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    // Sort posts in reverse chronological order by dateTime string
    const orderedPosts = posts
      .slice()
      .sort((a: PostStateType, b: PostStateType) =>
        b.date.localeCompare(a.date)
      );

    const itemKey = (index: number) => orderedPosts[index].id;

    const renderItem = ({
      index,
      style,
    }: {
      index: number;
      style: CSSProperties;
    }) => {
      const post = orderedPosts[index];
      return (
        <div style={style} key={itemKey(index)}>
          <PostExcerpt post={post} />
        </div>
      );
    };

    content = (
      <FixedSizeList
        height={700} // 보여줄 전체 높이
        width={800} // 보여줄 넓이
        itemCount={orderedPosts.length} // post 개수
        itemSize={270} // 개별적 post의 높이
      >
        {renderItem}
      </FixedSizeList>
    );
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <Home content={content} />;
};

export default HomeContainer;
