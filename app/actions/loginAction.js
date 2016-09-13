/**
 * Created by vison on 16/8/17.
 */
import Fetch from '../network/mockFetch'
import CommonAction from './commonAction'

const _toLogin = (username, password) => {
    return dispatch => {
        dispatch(CommonAction.showLoading());
        return new Promise((resolve, reject) => {
            Fetch.loginApp(username, password)
                .then((res) => {
                    setTimeout(()=> {
                        dispatch(CommonAction.dismissLoading());
                        dispatch(_loginSuccess(res));
                        resolve(res);
                    }, 3000);
                }, (error)=> {
                    dispatch(CommonAction.dismissLoading());
                    dispatch(_loginFailed(error));
                    reject(error);
                })
                .catch((errorData) => {
                    dispatch(_loginFailed(errorData));
                    reject(errorData);
                })
        })

    };

};

const _loginRequest = (username, password) => {
    return {
        type: 'LOGIN_REQUEST',
        payload: {
            username: username,
            password: password
        }
    };
};

const _loginSuccess = (token) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            text: token
        }
    };
};

const _loginFailed = (error) => {
    return {
        type: 'LOGIN_FAILED',
        payload: {
            text: error
        }
    };
};

export default LoginAction = {
    toLogin: (username, password) => _toLogin(username, password),
    loginSuccess: () => _loginSuccess(token),
    loginFailed: (error)=> _loginFailed(error)
}
