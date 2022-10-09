import axios from "axios";
import { Button, Modal, Space } from 'antd';
import Loading from "../components/loading/Loading";

const error = (e) => {
    Modal.error({
        title: 'TIP',
        content: e,
    });
};

const withLoading = true
async function http (options) {
    // options.url = '/api' + options.url;
    options.headers = Object.assign(
        { Authorization: sessionStorage.getItem('token') },
        options.headers || {}
    )
    if(withLoading) {
        Loading.openLoading()
        await new Promise(resolve => setTimeout(() => resolve(),500))
    }
    return axios(options)
        .then(response => {
            if(response.status === 200) return response.data;
            else throw new Error(response.statusText);
        })
        .then((result) => {
            switch(result.status) {
                case 200:
                    if(withLoading) Loading.closeLoading()
                    return result.data;
                case 199:
                case 401:
                case 404:
                case 500:
                    throw new Error(result.message);
            }
        })
        .catch((e) => {
            if(withLoading) Loading.closeLoading()
            error(e.message)
            return Promise.reject(e.message);
        });
}
export default http
