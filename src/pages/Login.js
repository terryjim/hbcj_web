import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Well } from 'react-bootstrap';
let Login = ({ dispatch, hidden, loading }) =>
    (<div style={{
        display: hidden ? 'none' : ''
    }}> <div>
            {
                loading ?
                    (
                        <div className="col-md-12 text-center"><Well><img src={'images/loading.gif'} />
                            <p>正在登录中，请稍后...</p></Well></div>
                    )
                    : (<div><div className="banner">
                        <img src={'images/banner.png'} />
                    </div>
                        <div className="login-box">
                            <form action="" method="get">
                                <input className="input-username" ref={userName => this.userName = userName} type="text" placeholder="请输入用户名" />
                                <input className="input-username input-password" ref={password => this.password = password} type="password" placeholder="请输入密码" />
                                <button className="btn-login" name="submit" type="button" onClick={() => {
                                    alert("begin!!!")
                                    alert(this.userName.value)
                                    alert(this.password.value)
                                    if (this.userName.value == '') {
                                        alert('请输入用户名')
                                        return null
                                    }
                                    if (this.password.value == '') {
                                        alert('请输入密码')
                                        return null
                                    }
                                    alert("ooo")
                                    dispatch(login({ userName: this.userName.value, password: this.password.value }))
                                }} >登 录</button>
                            </form>
                        </div>
                        <div className="footer">湖北城市建设职业技术学院门禁查询系统</div></div>)
            }
        </div>


    </div>)





const mapStateToProps = (state) => {
    let hidden = state.showPage !== 0
    let loading = state.loading
    return { hidden, loading }
}

/*const mapDispatchToProps = {
    login: login
}
*/

Login = connect(
    mapStateToProps/*, mapDispatchToProps*/
)(Login)


//TopNav = connect()(TopNav)
export default Login
