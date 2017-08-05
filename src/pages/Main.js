import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Result from './Result'

let Main = ({ hidden}) =>

    (<div style={{
        display: hidden ? 'none' : ''
    }}>
    <div className="banner">
            <img src="../images/banner.png" />
    </div>       
     <SearchBar/><Result/>      
        <div className="footer">湖北城市建设职业技术学院门禁查询系统</div>
    </div>)





const mapStateToProps = (state) => {
    let hidden = state.showPage === 0 
    return { hidden}
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
