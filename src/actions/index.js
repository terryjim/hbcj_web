//是否登录成功
export const logined = ({token,userName}) => ({
  type: 'LOGINED',
  token,
  userName
})
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
})
//用户管辖的部门列表
export const userDepts = (depts) => ({
  type: 'USER_DEPTS',
  depts
})
export const stat = (json) => (
  {
    type: 'STAT',
    stat: json
  }
)
export const login = ({ userName, password }) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
  //alert(1)
  let headers = { 'Content-Type': 'application/json' };

  //headers.Authorization = WebIM.config.tokenLocal
  let body = JSON.stringify({
    userName, password
  })

  let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
  console.log('登录')
  //alert(2)
  dispatch(loading())
  //alert(3)
  // return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
  return fetch(window.HBCJ.config.loginUrl, args).then(response => { 
    console.log(11)
    console.log(response); return (response.json()) })
    .then(json => {
      console.log(json)
      if (json != null && json.token != null && json.token != '') {
        console.log('登录成功')
        dispatch(getDepts({ token: json.token }))
        dispatch(loaded())
        return dispatch(logined({token:json.token,userName}))
      }
      else {
        console.log('登录失败')
        alert('用户名或密码错误，请重新登录！')
        return  dispatch(loaded())
      }
    }).catch(e=>{
      console.log(e);
       alert('网络异常，请稍后再试！')
      return  dispatch(loaded())
  }
    )
}
//根据用户token获取所辖部门
export const getDepts = ({ token }) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/

  let headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': token
  };
  //headers.Authorization = WebIM.config.tokenLocal


  let args = { method: 'GET', mode: 'cors', headers, cache: 'reload' }
  console.log('获取部门信息')
  // return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
  return fetch(window.HBCJ.config.getDeptsUrl, args).then(response => { console.log(response); return (response.json()) })
    .then(json => {
      console.log(json)
      if (json != null && json.token != '') {
        console.log('获取部门信息成功')
        return dispatch(userDepts(json))
      }
      else {
        console.log('获取部门信息失败')
        alert('获取部门信息失败！')
        return null
      }
    })
}

//统计刷卡次数
export const entranceStat = ({ depId, days, threshold, token }) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
  dispatch(loading())
  let headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': token
  };
  //headers.Authorization = WebIM.config.tokenLocal

  let args = { method: 'GET', mode: 'cors', headers: headers,  cache: 'reload' }
  console.log('统计')
  // return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
  return fetch(window.HBCJ.config.getStatUrl+'?depId='+depId+'&days='+days+'&threshold='+threshold, args).then(response => { console.log(response); return (response.json()) })
    .then(json => {
      console.log(json)
      dispatch(loaded())
      return dispatch(stat(json))

    }).catch(e=>{
      console.log(e);
       alert('网络异常，请稍后再试！')
      return  dispatch(loaded())
  })
}


//页面刷新中
export const loading = () => (
  {
    type: 'LOADING'  
  }
)
//页面刷新中
export const loaded = () => (
  {
    type: 'LOADED'  
  }
)




function convertObjectToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

