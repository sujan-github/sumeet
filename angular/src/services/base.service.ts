import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    IArticle, IPage, IMenu
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

        console.log('item:', item);

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
export class ArticleService extends Service<IArticle> {
    public baseUrl = domain + 'api/article/article';
}

@Injectable()
export class PageService extends Service<IPage> {
    public baseUrl = domain + 'api/page/page';
}

@Injectable()
export class MenuService extends Service<IMenu> {
    public baseUrl = domain + 'api/menu/menu';
}
