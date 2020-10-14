import React from "react"
import QueueAnim from "rc-queue-anim"
import TweenOne from "rc-tween-one"
import { getChildrenToRender } from "./utils"
import { Modal, Button, Divider, Row, Col, Input, Form } from "antd"
import DemoForm from "../demoForm"
import PlatformVideo from "../CustomComponents/PlatformVideo"
const { Search } = Input

class Banner5 extends React.Component {
  formRef = React.createRef()

  state = { visible: false, emailAddress: "" }

  onFinish = values => {
    fetch("/api/tg", { method: "POST", body: JSON.stringify(values) })
    console.log(values)
    this.showModal(values.homepageEmail)

    window.$crisp.push(["set", "user:email", [values.email]])
    window.$crisp.push(["set", "session:segments", [["learn_more"]]])
    window.$crisp.push(["set", "session:event", [["learn_more", values.email]]])
  }

  onFinishFailed = errorInfo => {
    // setSubmitted(true);
    // console.log("Failed:", errorInfo);
    fetch("/api/tg", { method: "POST", body: JSON.stringify(errorInfo) })
  }

  showModal = email => {
    console.log(email)
    this.setState({
      visible: true,
      emailAddress: email,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    const { ...tagProps } = this.props
    const { dataSource } = tagProps
    delete tagProps.dataSource
    delete tagProps.isMobile
    const animType = {
      queue: "bottom",
      one: {
        y: "+=30",
        opacity: 0,
        type: "from",
        ease: "easeOutQuad",
      },
    }

    return (
      
      <div {...tagProps} {...dataSource.wrapper} >
        <div class="bg_graphic">
        <video
              loop="true"
              autoplay="autoplay"
              class="video"
              muted
            >
              <source
                src="	https://deephire.s3.amazonaws.com/websiteAssets/finalvid1.mp4"
                type="video/mp4"
              />
            </video>
        </div>
        <div {...dataSource.page}>
          
        

          <Modal
            title="Request Free Trial"
            visible={this.state.visible}
            footer={[]}
            width={'80%'}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            centered
          >
            <Row>
              <Col span={12} offset={7}>
                <div style={{ width: '80%' }}>
                  <PlatformVideo />
                </div>
                <Divider>Request Free Trial</Divider>

                <DemoForm emailAddress={this.state.emailAddress} />
              </Col>
            </Row>
          </Modal>
          <QueueAnim
            key="text"
            type={animType.queue}
            leaveReverse
            ease={["easeOutQuad", "easeInQuad"]}
            {...dataSource.childWrapper}
            componentProps={{
              md: dataSource.childWrapper.md,
              xs: dataSource.childWrapper.xs,
            }}
          >
            {dataSource.childWrapper.children.map(getChildrenToRender)}


            {/* 
            <div name="button" class="banner5-button-wrapper" style={"opacity: 1; transform: translate(0px, 0px);"}
            <button type="button" class="ant-btn banner5-button kd5z8m3n24l-editor_css ant-btn-primary">
            <span><span><span><span><font><font>Start Free Now</font></font></span></span></span></span>
            </button>
            </div> */}
            <Form
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              ref={this.formRef}
            >
              <Form.Item
                name="homepageEmail"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Search
                  placeholder="Enter your email address"
                  enterButton="Watch Demo"
                  size="large"
                  onSearch={() => this.formRef.current.submit()}
                />
              </Form.Item>
              {/* <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                {'Watch Demo'}
              </Button>
            </Form.Item> */}
            </Form>
            {/* <div name="button" class="banner5-button-wrapper" style={{opacity: 1, transform: 'translate(0px,0px)'}}>
            <button onClick={this.showModal} type="button" class="ant-btn banner5-button kd5z8m3n24l-editor_css ant-btn-primary">
              <span><span><span><span><font><font>Start Free Now!!!!</font></font></span></span></span></span>
            </button>
          </div> */}
          </QueueAnim>
        
          {/* <TweenOne animation={animType.one} key="title" {...dataSource.image}> */}
          
            {/* // <img src={} width="100%" alt="img" /> */}
          {/* </TweenOne> */}
        </div>
      {/* </div> */}
      </div>
    )
  }
}
export default Banner5
