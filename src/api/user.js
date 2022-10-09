import http from '../utils/http.js'

export default {
    login: (data) => http({ url: '/user/login', method: 'post', data }),
    getMneu: data => http({ url: '/user/getmenu', method: 'post', data  }),
}
