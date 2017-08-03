//用户所辖部门信息

/*const sample = [
    { id: 1, depName: 'topit',parentId:0}, 
    { id: 1123, depName: 'topit',parentId:1}
]
*/
const depts = (state =null, action) => {
    if (action.type === 'USER_DEPTS') {
        state = action.depts
    }
    return state;

}
export default depts;