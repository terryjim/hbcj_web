//是否登录成功
export const logined = (token) => ({
  type: 'LOGINED',
  token
})
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
})

export const login = ({ userName, password }) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
  let headers = { 'Content-Type': 'application/json' };
  debugger
  //headers.Authorization = WebIM.config.tokenLocal
  let body =JSON.stringify({
    userName, password
  })

  let args = { method: 'POST',mode: 'cors', headers:headers, body, cache: 'reload' }
  console.log('登录')
  // return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
  return fetch(window.HBCJ.config.loginUrl, args).then(response => { console.log(response); return (response.json()) })
    .then(json => {
      console.log(json)
      if (json != null && json.token != null && json.token != '') {
        console.log('登录成功')
        return dispatch(logined(json.token))
      }
      else {
        console.log('登录失败')
        alert('登录失败，请重新登录！')
        return dispatch(loginFailure())
      }
    })
}

/************************************************************
 * 左侧点击事件
************************************************************/

//选择好友显示好友基础信息
export const showIntro = (openId) => ({
  type: 'SHOW_INTRO',
  openId
})

/************************************************************
 * 其它事件
************************************************************/
//刷新，1:好友　2:群组　3:组织
export const loading = (id) => (
  {
    type: 'LOADING',
    id
  }
)





function convertObjectToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

