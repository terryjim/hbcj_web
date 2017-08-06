import { combineReducers } from 'redux'
import showPage from './showPage'
import depts from './depts'
import user from './user'
import stat from './stat'
import loading from './loading'
export default combineReducers({
    showPage,depts,user,stat,loading
})
