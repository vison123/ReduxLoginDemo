/**
 * Created by vison on 16/8/17.
 */
import { Loading } from 'mx-artifacts';
const initialState = {
    showLoading: false,
    selectedTab: 'home'
};

export default function showLoading(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LOADING':
            return Object.assign({}, state, {
                showLoading: true
            });
        case 'DISMISS_LOADING':
            return Object.assign({}, state, {
                showLoading: false
            });
        case 'SELECTED_TAB':
            return Object.assign({}, state, {
            selectedTab: action.payload.text
        });
        default:
            return state
    }
}