export type ApiNewsResponseStatus = "ok" | "error";

export type ApiNewsCategory =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

export type INewsApiResponse = {
  status: ApiNewsResponseStatus;
  code?: string;
  error?: string;
  totalResults: number;
  articles: Array<INewsApiArticle>;
};

export type INewsApiArticle = {
  source: INewsApiSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type INewsApiSource = {
  id: string | null;
  name: string;
};

export type ResponseData = {
  status: number;
  data: {
    articles: INewsApiArticle[];
  };
};
