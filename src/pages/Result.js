import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login, entranceStat } from '../actions'
import { Table, FormGroup, FormControl, Form } from 'react-bootstrap';


let Result = ({stat}) =>
    (
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
                {
                    stat == null ? (<tr>
                        <td colSpan="5">未查出相应记录</td>
                    </tr>) : stat.map((x, index) => (<tr>
                        <td>{index + 1}</td>
                        <td>{x.userName}</td>
                        <td>{x.cardNo}</td>
                        <td>{x.departmentName}</td>
                        <td>{x.entranceCount}</td>
                    </tr>))
                }
            </tbody>
        </Table>
)





const mapStateToProps = (state) => {   
    let stat = state.stat   
    return { stat}
}

/*const mapDispatchToProps = {
    login: login
}
*/

Result = connect(
    mapStateToProps
)(Result)


//TopNav = connect()(TopNav)
export default Result
