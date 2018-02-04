export interface IArticle {
  Id: number;
  Heading: string;
  Content: string;
  PageId: number;
  UserId: number;
  PostedBy: string;
  CategoryId: number;
  Category: string;
  IsBlog: boolean;
  PostedOn: Date;
  article_image?: IArticleImage[];
  blog_category?: IBlogCategory;
  user?: IUser;
}

export interface IArticleImage {
  Id: number;
  ImagePosition: string;
  ArticleId: number;
  Order: number;
  Caption: string;
  ImageId: number;
  article?: IArticle;
  image?: IImage;
}

export interface IBlogCategory {
  Id: number;
  Category: string;
  article?: IArticle[];
}

export interface IImage {
  Id: number;
  ImagePath: string;
  article_image: IArticleImage[];
}

export interface IMenu {
  Id: number;
  Name: string;
  Url: string;
  ParentId: number;
  menu?: IMenu;
  page?: IPage[];
}

export interface IPage {
  Id: number;
  MenuId: number;
  PageTitle: string;
  Content: string;
  ShowPageTitle: boolean;
Content: string;
  menu?: IMenu;
}

export interface ITemplate {
  Id: number;
  Name: string;
  InnerHtml: string;
  IsBlog: boolean;
}

export interface IUser {
  Id: number;
  FullName: string;
  UserName: string;
  Password: string;
  Email: string;
  article?: IArticle[];
}
