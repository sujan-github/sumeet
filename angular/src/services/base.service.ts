import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
  IBlog, IPage, IMenu, ITemplate, IUser, IImage, IAuthentication
} from '../models/models';

export interface IService {
  getAll(query?: string): Observable<any>;
  get(id: number, query?: string): Observable<any>;
  // put(id: number, item: any): Observable<any>;
  post(item: any): Observable<any>;
  delete(id: number): Observable<any>;
}

export const domain = `/sumeet/index.php/`;

export class Service<T> implements IService {
  public baseUrl = '';

  static get parameters() {
    return [[Http]];
  }

  constructor(
    public http: Http,
  ) {
  }


  getAll(query?: string): Observable<T[]> {
    if (query != null) {
      query = `?${query}`;
    } else {
      query = '';
    }

    return this.http.get(this.baseUrl + query).map((res: Response) => {
      return res.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  get(id: number, query?: string): Observable<T> {
    if (query != null) {
      query = `?${query}`;
    } else {
      query = '';
    }

    return this.http.get(this.baseUrl + `/${id}` + query).map((res: Response) => {
      return res.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  // put(id: number, item?: T): Observable<T> {
  //     return this.http.put(this.baseUrl + `(${id})`, item).map((res: Response) => {
  //         return res.json();
  //     }).catch((err) => {
  //         return Observable.throw(err);
  //     });
  // }

  post(item: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseUrl, JSON.stringify(item), { headers: headers }).map((res: Response) => {
      return res.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  delete(id: number): Observable<T> {
    return this.http.delete(this.baseUrl + `(${id})`).map((res: Response) => {
      return res.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }
}

@Injectable()
export class BlogService extends Service<IBlog> {
  public baseUrl = domain + 'api/blog';
}

@Injectable()
export class PageService extends Service<IPage> {
  public baseUrl = domain + 'api/page';
}

@Injectable()
export class MenuService extends Service<IMenu> {
  public baseUrl = domain + 'api/menu';
}

@Injectable()
export class ImageService extends Service<IImage> {
  public baseUrl = domain + 'api/image';
}

@Injectable()
export class TemplateService extends Service<ITemplate> {
  public baseUrl = domain + 'api/template';
}
@Injectable()
export class UserService extends Service<IUser> {
  public baseUrl = domain + 'api/user';
}

@Injectable()
export class AuthenticationService extends Service<IAuthentication> {
  public baseUrl = domain + 'api/authentication';

  login(username: string, password: string): Observable<IUser> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const item = {
      UserName: username,
      Password: password
    };

    return this.http.post(this.baseUrl, JSON.stringify(item), { headers: headers }).map((res: Response) => {
      return res.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }

}
