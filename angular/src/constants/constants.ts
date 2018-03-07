import { ISetup, IUser } from '../models/models';

export namespace Constants {
    export const localStorageSetupKey = 'setup';
    export const localStorageSetupLoadedKey = 'loaded';
    export const localStorageUserInfo = 'UserInfo';
    export const linkPrefix = '#/venus';
    export const blogLink = `${linkPrefix}/blog-and-news`;
    export class LocalStorage {

        public static isUserLoggedIn(): boolean {
            if (localStorage.getItem(localStorageUserInfo)) {
                return true;
            } else {
                return false;
            }
        }

        public static getUserInfo(): IUser {
            if (this.isUserLoggedIn()) {
                return JSON.parse(localStorage.getItem(localStorageUserInfo));
            }
            return null;
        }

        public static addUserInfo(userInfo): void {
            localStorage.setItem('UserInfo', JSON.stringify(userInfo));
        }

        public static isSetupLoaded(): boolean {
            if (localStorage.getItem(localStorageSetupLoadedKey)) {
                return true;
            } else {
                return false;
            }
        }
        private static setSetupLoaded(loaded: boolean): void {
            localStorage.setItem(localStorageSetupLoadedKey, JSON.stringify(loaded));
        }
        public static hasSetup(): boolean {
            return localStorage.getItem(localStorageSetupKey) !== null;
        }

        public static setSetup(setup: ISetup) {
            localStorage.setItem(localStorageSetupKey, JSON.stringify(setup));
        }

        public static getSetup(): ISetup {
            const setup = localStorage.getItem(localStorageSetupKey);
            return JSON.parse(setup);
        }
    }
    export class Page {
        public static HomePage = 'home';
        public static BlogPage = 'blog-and-news';
        public static OtherPage = 'other';
        public static GetPageLink(page): string {
            return `${linkPrefix}/${page}`;
        }
    }
}
