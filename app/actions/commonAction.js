/**
 * Created by vison on 16/8/17.
 */

const _showLoading = () => {
    return {
        type: 'SHOW_LOADING'
    };
};

const _dismissLoading = () => {
    return {
        type: 'DISMISS_LOADING'
    };
};

const _selectTab = (selectTab) =>{
    return {
        type: 'SELECTED_TAB',
        payload: {
            text: selectTab
        }
    };
}

export default LoginAction = {
    showLoading: () => _showLoading(),
    dismissLoading: ()=> _dismissLoading(),
    selectTab: (selectTab) =>_selectTab(selectTab)
}
