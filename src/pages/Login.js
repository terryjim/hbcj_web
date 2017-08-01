import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
let Login = ({hidden}) =>
    (<div style={{
        display: hidden ? 'none' : ''
    }}><div className="banner">
            <img src="./images/banner.png" />
        </div>
        <div className="login-box">
            <form action="" method="get">
                <input className="input-username" ref={userName => this.userName = userName} type="text" placeholder="请输入用户名" />
                <input className="input-username input-password" ref={password => this.password = password} type="password" placeholder="请输入密码" />
                <button className="btn-login" name="submit" type="button" onClick={() =>this.props.login(this.userName, this.password)} >登 录</button>
            </form>
        </div>
        <div className="footer">湖北城市建设职业技术学院门禁查询系统</div></div>)





const mapStateToProps = (state) => {
    let hidden = state.showPage !== 0
    return { hidden }
}

const mapDispatchToProps = {
    login: login
}


Login = connect(
    mapStateToProps, mapDispatchToProps
)(Login)


//TopNav = connect()(TopNav)
export default Login
