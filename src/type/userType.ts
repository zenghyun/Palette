import { ChangeEvent, CSSProperties } from "react";

export type UserStateType = {
  id: string;
  name: string;
};

export type UserListType = {
  users: Array<UserStateType>;
};

export type SearchUserType = {
  searchWord: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  inputReset: () => void;
};

export type UserListComponentType = {
  handleSearch: (searchWord: string) => void;
  filteredUsers: UserStateType[];
  renderedUsers: ({
    index,
    style,
  }: {
    index: number;
    style: CSSProperties;
  }) => JSX.Element;
};


export type UserPageType = {
  user: UserStateType; 
  postTitles: JSX.Element[];
}