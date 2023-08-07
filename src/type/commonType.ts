import { INewsApiArticle } from "./apiType";
import { PostStateType } from "./postType";
import { UserStateType } from "./userType";
import { NotificationType } from "./notificationsType";
import { CSSProperties } from "react";

export type FixedWindowType = {
  height: number;
  width: number;
  itemCount: PostStateType[] | UserStateType[] | INewsApiArticle[] | NotificationType[];
  itemSize: number;
  renderedItem: ({
    index,
    style,
  }: {
    index: number;
    style: CSSProperties;
  }) => JSX.Element;
};
