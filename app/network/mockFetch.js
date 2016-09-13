/**
 * Created by vison on 16/8/18.
 */

const _loginApp = (username, password)=> {
    return new Promise((resolve,reject)=>{
        if (username == '111' && password == '111') {
            resolve('loginSuccess');
        } else {
            reject('loginFailed')
        }
    });

};

export default {
    loginApp: (username, password)=>_loginApp(username, password)
}