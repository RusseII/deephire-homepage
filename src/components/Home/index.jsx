/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react"
import { enquireScreen } from "enquire-js"

import Nav3 from "./Nav3"
import Banner5 from "./Banner5"
import Feature4 from "./Feature4"
import Content12 from "./Content12"
import Content5 from "./Content5"
import Feature6 from "./Feature6"
import Content11 from "./Content11"
import Footer1 from "./Footer1"

import {
  Nav31DataSource,
  Banner50DataSource,
  Feature40DataSource,
  Content122DataSource,
  Content50DataSource,
  Feature60DataSource,
  Content110DataSource,
  Footer10DataSource,
} from "./data.source"
import "./less/antMotionStyle.less"

let isMobile
enquireScreen(b => {
  isMobile = b
})

const { location = {} } = typeof window !== "undefined" ? window : {}

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        })
      }, 500)
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_1"
        key="Nav3_1"
        dataSource={Nav31DataSource}
        isMobile={this.state.isMobile}
      />,
      this.props.children || [
        <Banner5
          id="Banner5_0"
          key="Banner5_0"
          dataSource={Banner50DataSource}
          isMobile={this.state.isMobile}
        />,
        <Feature4
          id="Feature4_0"
          key="Feature4_0"
          dataSource={Feature40DataSource}
          isMobile={this.state.isMobile}
        />,
        // <Content12
        //   id="Content12_2"
        //   key="Content12_2"
        //   dataSource={Content122DataSource}
        //   isMobile={this.state.isMobile}
        // />,
        <Content5
          id="Content5_0"
          key="Content5_0"
          dataSource={Content50DataSource}
          isMobile={this.state.isMobile}
        />,
        <Feature6
          id="Feature6_0"
          key="Feature6_0"
          dataSource={Feature60DataSource}
          isMobile={this.state.isMobile}
        />,
        <Content11
          id="Content11_0"
          key="Content11_0"
          dataSource={Content110DataSource}
          isMobile={this.state.isMobile}
        />,
      ],
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ]
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    )
  }
}
