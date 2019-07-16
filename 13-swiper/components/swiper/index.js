//基于swiper的Swiper组件

import React, { Fragment } from "react";
import BaseSwiper from "swiper";
import "swiper/dist/css/swiper.css";
import Propstypes from "prop-types";
import "./index.css";

class Swiper extends React.Component {
  render() {
    let { pagination, navigation, slide } = this.props;
    if (slide.length > 0) {
      return (
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {slide.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
          {/* <!-- 如果需要分页器 --> */}
          {pagination && <div className="swiper-pagination" />}

          {/* <!-- 如果需要导航按钮 --> */}
          {navigation && (
            <Fragment>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </Fragment>
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  // 初始化swiper
  initSwiper() {
    let mySwiper = new BaseSwiper(".swiper-container", {
      // 选项配置
      pagination: this.props.pagination ? { el: ".swiper-pagination" } : {},
      navigation: this.props.navigation
        ? {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        : {},
      autoplay: this.props.autopaly
    });
  }

  componentDidUpdate() {
    if (this.mySwiper) {
      this.mySwiper.destroy();
    }
    this.initSwiper();
  }
}

// 设置props校验
Swiper.propsType = {
  pagination: Propstypes.bool, //分页器
  autopaly: Propstypes.bool,
  navigation: Propstypes.bool,
  slide: Propstypes.arrayOf(Propstypes.string).isRequired //slide是个数组 数组里面必须是个字符串
};

// 设置默认值
Swiper.defaultProps = {
  pagination: true,
  navigation: true
};

export default Swiper;
