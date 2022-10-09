import http from '../utils/http.js'

export default {
    get: () => http({ url: '/classroom/all' }),
    remove: id => http({ url: '/classroom/remove/' + id, }),
    update: data => http({ url: '/classroom/update', method: 'post', data }),
    add: data => http({ url: '/classroom/add', method: 'post', data })
}
