//0:登录页面　1：主页面
const showPage = (state = 0, action) => {
    switch (action.type) {
        case 'LOGINED':
            return 1;
        case 'LOGIN_FAILURE':
            return 0;
        default:
            return state;
    }
}

export default showPage