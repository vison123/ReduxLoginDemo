/**
 * Created by vison on 16/8/17.
 */
const initialState = {
    netWorkState: false,
    isLogout: false,
    isForceLogout: false,
    token: '',
    isFreezing: false,
    isDelete: false,
    deviceModel: 'XIAOMI'
};

export default _login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return Object.assign({}, state, {
                token: action.payload.text
            });
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                token: action.payload.text
            });
        case 'LOGIN_FAILED':
            return Object.assign({}, state, {
                token: action.payload.text
            });
        default:
            return state
    }
};

