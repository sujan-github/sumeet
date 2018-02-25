export interface IBlog {
  Id: number;
  Title: string;
  Content: string;
  UserId: number;
  PostedBy: string;
  Category: string;
  Image?: string;
  PostedOn: Date;
  user?: IUser;
}

export interface IImage {
  Id: number;
  ImagePath: string;
}

export interface IMenu {
  Id: number;
  Name: string;
  Url: string;
  ParentId: number;
  menu?: IMenu;
  children?: IMenu[];
  page?: IPage[];
}

export interface IPage {
  Id: number;
  MenuId: number;
  PageTitle: string;
  Menu: string;
  Content: string;
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
  article?: IBlog[];
}

export interface ICategoryViewModel {
  Title: string;
  Count: number;
}

export interface IAuthentication {
  UserName: string;
  Password: string;
}

export interface IBlogCategoryViewModel {
  category: string;
  count: number;
  blogs: IBlog[];
}

export interface ISetup {
  Id: number;
  Logo: string;
  ContactNumbers: string;
  SocialLinks: string;
  BodyBgColor: string;
  MenuBgColor: string;
  TextColor: string;
  MenuTextColor: string;
  HeadingTextColor: string;
  TopHeaderBgColor: string;
  FooterBgColor: string;
  FooterTextColor: string;
  CarouselImage: string;
  CarouselText: string;
  ContactSection: string;
  TopHeaderSection: string;
  HomeSection: string;
  Active: boolean;
}
