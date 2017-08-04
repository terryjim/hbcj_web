//页面加载
const loading = (state = false, action) => {
    switch (action.type) {
        case 'LOADING':
            return true
        case 'LOADED':
            return false
        default:
            return state;
    }
}
export default loading;

