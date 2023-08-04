import { UserStateType } from "../../type/userType";

const PostAuthor = ({ author }: { author: UserStateType }) => {
  return (
    <span>
      작성자 : <strong>{author ? author.name : "Unknown author"}</strong>
    </span>
  );
};

export default PostAuthor;
