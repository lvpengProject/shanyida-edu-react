import http from "../utils/http";

export default {
    get: () => http({ url: '/dictionary/all', })
}
