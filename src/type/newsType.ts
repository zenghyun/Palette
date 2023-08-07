import { INewsApiArticle } from "./apiType";

export type NewsListComponentType = {
    articles: INewsApiArticle[];
    error?: unknown;
    noNews?: string;
    width?: number;
  };