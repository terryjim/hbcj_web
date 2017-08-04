import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login, entranceStat } from '../actions'
import { Table, FormGroup, FormControl, Form } from 'react-bootstrap';

//阀值
const fzArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1000]
//天数选择
const dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]
let SearchBar = ({ depts, token, dispatch }) =>

    (
        <div className="menu" >
            <ul>
                <li><FormControl componentClass="select" placeholder="select" ref={selDept => this.selDept = selDept}>
                    <option value="0">部门</option>
                    {
                        (depts != null && depts.length > 0) ? depts.map(x => (<option value={x.id}>{x.depName}</option>)) : null
                    }

                </FormControl></li>
                <li><FormControl componentClass="select" placeholder="select" ref={selDay => this.selDay = selDay}>
                    <option value="0">天数</option>
                    {dayArray.map(x => (<option value={x}>{x}</option>))}
                </FormControl></li>
                <li><FormControl componentClass="select" placeholder="select" ref={selFz => this.selFz = selFz}>
                    <option value="0">阀值</option>
                    {fzArray.map(x => (<option value={x}>{x}</option>))}
                </FormControl></li>
                <li>
                    <a href="javascript:void(0)" onClick={() => {
                        let selDept = ReactDOM.findDOMNode(this.selDept);
                        let selDay = ReactDOM.findDOMNode(this.selDay);
                        let selFz = ReactDOM.findDOMNode(this.selFz);
                        let depId = selDept.options[selDept.selectedIndex].value
                        let days = selDay.options[selDay.selectedIndex].value
                        let threshold = selFz.options[selFz.selectedIndex].value
                        if (depId == 0) {
                            alert('请选择部门')
                            return null
                        }
                        if (days == 0) {
                            alert('请选择天数')
                            return null
                        }
                        if (threshold == 0) {
                            alert('请选择阀值')
                            return null
                        }
                        dispatch(entranceStat({ depId, days, threshold, token }))
                    }}>
                        <img src="../images/icon-search.png" title="查询" /></a>
                </li>
                {/*onClick={()=>alert(this.dept.selectedIndex)}*/}
            </ul>
        </div>
    )





const mapStateToProps = (state) => {
    let depts = state.depts
    let token = state.user == null ? null : state.user.token
    return { depts, token }
}

/*const mapDispatchToProps = {
    login: login
}
*/

SearchBar = connect(
    mapStateToProps
)(SearchBar)


//TopNav = connect()(TopNav)
export default SearchBar
