import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
let Main = ({hidden,dispatch}) =>
    (<div style={{
        display:hidden ? 'none' : ''
    }}><div className="banner">
    	<img src="%PUBLIC_URL%/images/banner.png"/>
    </div>
	<div className="menu">
    	<ul>
        	<li><span id="trigger1">部门</span><img src="%PUBLIC_URL%/images/down.png"/></li>
        	<li><span id="trigger2">统计天数</span><img src="%PUBLIC_URL%/images/down.png"/></li>
        	<li><span id="trigger3">阀值</span><img src="%PUBLIC_URL%/images/down.png"/></li>
        	<li><a href="#"><img src="%PUBLIC_URL%/images/icon-search.png" title="查询"/></a></li>
        </ul>
    </div>
    <div className="ui-list">
    	<table width="100%" cellspacing="0">
          <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
          <tr>
            <td align="center" valign="middle">刘德华</td>
            <td align="center" valign="middle">882562349</td>
            <td align="center" valign="middle">造价</td>
            <td align="center" valign="middle">4</td>
          </tr>
          <tr>
            <td align="center" valign="middle">慕容云海</td>
            <td align="center" valign="middle">882562349</td>
            <td align="center" valign="middle">物流</td>
            <td align="center" valign="middle">4</td>
          </tr>
          <tr>
            <td align="center" valign="middle">杨颖</td>
            <td align="center" valign="middle">882562349</td>
            <td align="center" valign="middle">造价</td>
            <td align="center" valign="middle">2</td>
          </tr>
          <tr>
            <td align="center" valign="middle">张韶涵</td>
            <td align="center" valign="middle">3031754796</td>
            <td align="center" valign="middle">8栋测试101</td>
            <td align="center" valign="middle">11</td>
          </tr>
          <tr>
            <td align="center" valign="middle">周星驰</td>
            <td align="center" valign="middle">3031754796</td>
            <td align="center" valign="middle">电气</td>
            <td align="center" valign="middle">11</td>
          </tr>
        </table>
    </div>
    <div className="footer">湖北城市建设职业技术学院门禁查询系统</div>
</div>)





const mapStateToProps = (state) => {
    let hidden = state.showPage === 0
    return { hidden }
}

const mapDispatchToProps = {
    login: login
}


Main = connect(
    mapStateToProps, mapDispatchToProps
)(Main)


//TopNav = connect()(TopNav)
export default Main
