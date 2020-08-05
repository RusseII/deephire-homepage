/* global $crisp FS */
import React from "react"

import {
  Button,
  notification,
  Form,
  Input,
  Col,
  Row,
  message,
} from "antd"

const onFinish = (values, type, next) => {
  console.log(values)
  const data = { ...values, type }
  fetch("/api/tg", { method: "POST", body: JSON.stringify(data) })
  message.success("Success. You will hear from our team soon.")
  notification.close("ebook")
  // FS only exists in prod i think
  if (window.FS) {
    window.FS.identify(values.email, {
      email: values.email,
    })
  }
  window.$crisp.push(["set", "user:email", [values.email]])
  window.$crisp.push(["set", "session:segments", [["landing-website-capture"]]])
  next()
}

export const EmailForm = ({ text, type, next = () => null }) => {
  return (
    <>
      <div style={{ marginBottom: 16 }}>{text}</div>
      <Form onFinish={values => onFinish(values, type, next)}>
        <Form.Item noStyle>
          <Row gutter={16}>
            <Col span={15}>
              <Form.Item
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
                name="email"
              >
                <Input size="large" placeholder="Your email" />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Button size="large" block type="primary" htmlType="submit">
                Lets go!
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  )
}
export const openNotification = () => {
  if (
    window.$crisp.get("user:email") ||
    sessionStorage.getItem("isExitIntentAlreadyShown")
  )
    return

  notification.open({
    message: "Ultimate Guide To Video Interviewing - Free Book",
    description: (
      <EmailForm
        type="ebook notification"
        text="Learn how the best companies are changing their recruiting strategies during COVID"
      />
    ),
    duration: null,
    placement: "bottomLeft",
    key: "ebook",
  })
}
