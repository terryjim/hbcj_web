//用户所辖部门信息

/*const sample = [
    { id: 1, depName: 'topit',parentId:0}, 
    { id: 1123, depName: 'topit',parentId:1}
]
*/
const stat = (state =null, action) => {
    if (action.type === 'STAT') {
        state = action.stat
    }
    return state;

}
export default stat;