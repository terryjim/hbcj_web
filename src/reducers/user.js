
const user = (state =null, action) => {
    if (action.type === 'LOGINED') {
        state = Object.assign({},{token:action.token,userName:action.userName})
    }
     if (action.type === 'LOGIN_FAILURE') {
        state = null
    }
    return state;

}
export default user;