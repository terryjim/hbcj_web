//用户所辖部门信息

/*const sample = [
    { id: 1, depName: 'topit',parentId:0}, 
    { id: 1123, depName: 'topit',parentId:1}
]
*/
const depts = (state =null, action) => {
    if (action.type === 'LOGINED') {
        state = Object.assign({},{token:action.token,userName:action.userName})
    }
    return state;

}
export default depts;