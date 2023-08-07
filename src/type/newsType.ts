import { INewsApiArticle } from "./apiType";
import { ResponseData } from "./apiType";

export type PromiseCreatorType = () => Promise<ResponseData>;
export type DependencyType = string | undefined;

export type NewsListComponentType = {
  articles: INewsApiArticle[];
  error?: unknown;
  noNews?: string;
  width?: number;
};
