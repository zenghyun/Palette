import { ChangeEvent } from "react";

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

export type PostIdParamType = {
  postId? : string | undefined;
}

export type InitialPostType = {
  title: string;
  content: string;
  user: string;
};

export type PostListsType = {
  posts: Array<PostStateType>;
  status: string;
  error: null | string | undefined;
};

export type PostFormType = {
  type?: string;
  title: string;
  onTitleChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  postContent?: string;
  content?: string;
  onContentChanged: (content: string) => void;
  user?: string;
  onAuthorChanged?: (e: ChangeEvent<HTMLSelectElement>) => void;
  usersOptions?: JSX.Element[];
  onSavePostClicked?: () => void;
  canSave?: boolean;
};

export type ReactionEmojiType = {
  thumbsUp: string;
  hooray: string;
  heart: string;
  rocket: string;
  eyes: string;
};
