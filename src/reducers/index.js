import { combineReducers } from 'redux'
import showPage from './showPage'
import depts from './depts'
import stat from './stat'
import loading from './loading'
export default combineReducers({
    showPage,depts,stat,loading
})
