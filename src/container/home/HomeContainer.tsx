import { CSSProperties, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostStateType } from "../../type/postType";
import { RootStateType } from "../../app/store";
import { useAppDispatch } from "../../app/store";
import { selectAllPosts, fetchPosts } from "../../features/postsSlice";
import { fetchUsers } from "../../features/usersSlice";
import PostExcerpt from "../../components/home/PostExcerpt";
import { PostResponsive, debounce, setWidth } from "../common/responsiveWindow";
import Home from "../../components/home/Home";
import FixedWindow from "../common/FixedWindow";
import Loading from "../../components/common/Loading";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state: RootStateType) => state.posts.status);
  const error = useSelector((state: RootStateType) => state.posts.error);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
    // window resize debounce 시킴
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 250); // 250ms 지연

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [postStatus, dispatch]);

  const width = setWidth(windowWidth, "POST");

  let content;

  if (postStatus === "loading") {
    content = <Loading />;
  } else if (postStatus === "succeeded") {
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

    const [windowHeight, windowItem] = PostResponsive(width);

    content = (
      <FixedWindow
        height={windowHeight} // 보여줄 전체 높이
        width={width} // 보여줄 넓이
        itemCount={orderedPosts} // post 개수
        itemSize={windowItem} // 개별적 post의 높이
        renderedItem={renderItem}
      />
    );
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <Home content={content} />;
};

export default HomeContainer;
