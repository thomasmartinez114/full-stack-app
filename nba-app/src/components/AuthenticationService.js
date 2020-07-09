import axios from 'axios';

class AuthenticationService {

    registerSuccessfulLogin(username, password) {

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(basicAuthHeader)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user
    }

    setupAxiosInterceptors(basicAuthHeader) {


        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        )

    }
}

export default new AuthenticationService();