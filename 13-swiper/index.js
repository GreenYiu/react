import React from "react";
import ReactDom from "react-dom";
import Swiper from "./components/swiper";
import axios from "axios";

class App extends React.Component {
  state = {
    bannerList: []
  };
  render() {
    return (
      <div>
        <h1>测试 swiper</h1>

        <Swiper autopaly={true} slide={this.state.bannerList} />
      </div>
    );
  }

  getBannerList() {
    axios
      .get("https://m.maizuo.com/gateway?type=2&cityId=440300&k=6201046", {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605833207726646167417"}',
          "X-Host": "mall.cfg.common-banner"
        }
      })
      .then(response => {
        let res = response.data;
        console.log(res.data);

        if (res.status === 0) {
          this.setState({
            bannerList: res.data.map(item => {
              return  item.imgUrl;
            })
          });
        } else {
          alert(res.msg);
        }
      });
    /* fetch("https://m.maizuo.com/gateway?type=2&cityId=440300&k=4095676", {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605833207726646167417"}',
        "X-Host": "mall.cfg.common-banner"
      }
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          this.setState({
            bannerList: res.data.map(item => {
              return item.imgUrl;
            })
          });
        } else {
          alert(res.msg);
        }
      }); */
  }

  componentDidMount() {
    this.getBannerList();
  }
}

ReactDom.render(<App />, document.getElementById("app"));
