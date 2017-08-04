import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login, entranceStat } from '../actions'
import { Table, FormGroup, FormControl, Form } from 'react-bootstrap';
import SearchBar from './SearchBar'
import Result from './Result'

let Main = ({ hidden,loading}) =>

    (<div style={{
        display: hidden ? 'none' : ''
    }}>
    <div className="banner">
            <img src="../images/banner.png" />
    </div>
        {
    loading?
             (<div >
                <img src="../images/loading.gif" />
                <p>查询中，请稍后...</p>
            </div>)
      :
      <div><SearchBar/><Result/></div>
        } 
        <div className="footer">湖北城市建设职业技术学院门禁查询系统</div>
    </div>)





const mapStateToProps = (state) => {
    let hidden = state.showPage === 0   
    let loading=state.loading
    return { hidden, loading }
}

/*const mapDispatchToProps = {
    login: login
}
*/

Main = connect(
    mapStateToProps
)(Main)


//TopNav = connect()(TopNav)
export default Main
