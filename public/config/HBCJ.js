/**
 * git do not control webim.config.js
 * everyone should copy webim.config.js.demo to webim.config.js
 * and have their own configs.
 * In this way , others won't be influenced by this config while git pull.
 *
 */
var HBCJ = {}
window.HBCJ = HBCJ
HBCJ.config = {
    loginUrl: 'http://192.168.10.80:8080/hbcj/login',
    getDeptsUrl: 'http://192.168.10.80:8080/hbcj/getDeptsByToken',
    getStatUrl: 'http://192.168.10.80:8080/hbcj/stat',
}


