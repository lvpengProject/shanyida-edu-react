import ReactDOM from "react-dom";
import {Spin} from "antd";

export default {
    count: 0,
    dom: null,
    openLoading() {
        if(this.count === 0) {
            this.dom = document.createElement('div');
            this.dom.setAttribute("id","loading")
            document.body.appendChild(this.dom)
            ReactDOM.render(<Spin />,this.dom)
        }
        this.count++
    },
    closeLoading() {
        this.count--
        if(this.count === 0)
        document.body.removeChild(this.dom)
    }
}
