
export class Util {
    static URL = {
        BASE: 'http://localhost:8080'
    }

    

    static PAGE = {
        FIRST_PAGE: 0,
        PER_PAGE: 10,
        PAGES: [10, 25, 100, 500],
    }

    static MSG = {
        ERROR_MSG: "Something Went wrong. Please logout and logback in"
    }

    static getHeaders() {
        const token: any = localStorage.getItem('token');
        const headers = { headers: { auth: btoa(token) } };
        return headers;
    }


    // static PERMISSIONS = {
    //     IS_SUPER_ADMIN: () => {
    //         return localStorage.getItem('userType') == 'SA';
    //     },
    //     IS_ADMIN: () => {
    //         return localStorage.getItem('userType') == 'A';
    //     },
    //     IS_EMPLOYEE: () => {
    //         return localStorage.getItem('userType') == 'E';
    //     }
    // }

}