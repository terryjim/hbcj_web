//用户所辖部门信息

/*const sample = [
    { id: 1, depName: 'topit',parentId:0}, 
    { id: 1123, depName: 'topit',parentId:1}
]
*/
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