export type ReactionType = {
  [key: string]: number;
};

export type PostStateType = {
  id: string;
  date: string;
  title: string;
  content: string;
  reactions: ReactionType;
  user: string;
};

export type InitialPostType = {
  title: string;
  content: string;
  user: string;
}

export type PostListsType = {
  posts: Array<PostStateType>;
  status : string;
  error : null | string | undefined;
};
