import http from '../utils/http';

export default {
    get: data => http({ url: '/staff/list', method: 'post', data }),
    add: data => http({ url: '/staff/add', method: 'post', data }),
    update: data => http({ url: '/staff/update', method: 'post', data }),
    dimission: data => http({ url: '/staff/dimission', data }),
    reinstate: data => http({ url: '/staff/reinstate', data })
}
