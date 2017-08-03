import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Table, FormGroup, FormControl, Form } from 'react-bootstrap';

//阀值
const fzArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
//天数选择
const dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Main = ({ hidden, depts, dispatch }) =>
    (<div style={{
        display: hidden ? 'none' : ''
    }}><div className="banner">
            <img src="../images/banner.png" />
        </div>
        {/*<div className="menu">
    	<ul>
        	<li><span id="trigger1">部门</span><img src="../images/down.png"/></li>
        	<li><span id="trigger2">统计天数</span><img src="../images/down.png"/></li>
        	<li><span id="trigger3">阀值</span><img src="../images/down.png"/></li>
        	<li><a href="#"><img src="../images/icon-search.png" title="查询"/></a></li>
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
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
           <tr>
            <td align="center" valign="middle">姓名</td>
            <td align="center" valign="middle">卡号</td>
            <td align="center" valign="middle">部门</td>
            <td align="center" valign="middle">次数</td>
          </tr>
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
    </div>*/}
        <div className="menu">
            <ul>
                <li><FormControl componentClass="select" placeholder="select" ref={dept => this.dept = dept}>
                    <option value="0">部门</option>
                    {
                        (depts!=null&&depts.length>0)?depts.map(x => (<option value={x.id}>{x.depName}</option>)):null
                    }

                </FormControl></li>
                <li><FormControl componentClass="select" placeholder="select">
                    <option value="0">天数</option>
                    {dayArray.map(x => (<option value={x}>{x}</option>))}
                </FormControl></li>
                <li><FormControl componentClass="select" placeholder="select">
                    <option value="0">阀值</option>
                    {fzArray.map(x => (<option value={x}>{x}</option>))}
                </FormControl></li>
                <li><a href="#" onClick={()=>alert(this.dept.selectedIndex)}><img src="../images/icon-search.png" title="查询" /></a></li>
            </ul>
        </div>
        {/*<Form inline>
     <FormGroup controlId="formControlsSelect">      
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
      </FormGroup>
      <FormGroup>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
      </FormGroup>
      <FormGroup>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    </Form>*/}
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th></th>
                    <th>姓名</th>
                    <th>卡号</th>
                    <th>部门</th>
                    <th>次数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>周星驰</td>
                    <td>3031754796</td>
                    <td>电气</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>周星驰</td>
                    <td>3031754796</td>
                    <td>电气</td>
                    <td>2</td>
                </tr> <tr>
                    <td>1</td>
                    <td>周星驰</td>
                    <td>3031754796</td>
                    <td>电气</td>
                    <td>2</td>
                </tr> <tr>
                    <td>1</td>
                    <td>周星驰</td>
                    <td>3031754796</td>
                    <td>电气</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="3">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        <div className="footer">湖北城市建设职业技术学院门禁查询系统</div>
    </div>)





const mapStateToProps = (state) => {
    let hidden = state.showPage === 0
    let depts = state.depts
    return { hidden, depts }
}

const mapDispatchToProps = {
    login: login
}


Main = connect(
    mapStateToProps, mapDispatchToProps
)(Main)


//TopNav = connect()(TopNav)
export default Main
