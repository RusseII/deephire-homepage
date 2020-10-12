import React, { useState } from "react";
import { Form, Input, Button, Card, InputNumber, Result } from "antd";

// const layout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 18 }
// };
 const Demo = ({emailAddress}) => {
  const [submitted, setSubmitted] = useState(false);
  const onFinish = (values) => {
    setSubmitted(values);
    fetch("/api/tg", { method: "POST", body: JSON.stringify(values) })
    
  };

  const onFinishFailed = (errorInfo) => {
    // setSubmitted(true);
    // console.log("Failed:", errorInfo);
    fetch("/api/tg", { method: "POST", body: JSON.stringify(errorInfo) })
  };

  return (
    <div style={{ maxWidth: 450 }}>
      {submitted ? (
        <SuccessResult firstName={submitted.fullName.split(' ')[0]} />
      ) : (
        <Form
          layout="vertical"
          // {...layout}
          style={{ padding: 8 }}
          name="basic"
          initialValues={{
            remember: true,
            'workEmail': emailAddress
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!"
              }
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          

          <Form.Item
           
            name="workEmail"
            rules={[
              { required: true, message: "Please input your Email!" },
              {
                type: "email",
                message: "Please enter a valid Email!"
              }
            ]}
          >
            <Input placeholder="Work Email"/>
          </Form.Item>

          <Form.Item name="phoneNumber">
            <Input placeholder="Phone #"/>
          </Form.Item>
          <Form.Item
            // label="# of annual hires (estimated)?"
            name="hires"
            rules={[
              {
                required: true,
                message: "Please input estimated number of hires"
              }
            ]}
          >
            <InputNumber placeholder="# of Annual Hires" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
            {'Request Free Trial'}
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

const SuccessResult = ({ firstName }) => (
  <Result
    status="success"
    title={`Hello ${firstName}!`}
    subTitle="Someone from our team will be in touch with you soon."
    extra={[
      <Button type="primary" href="https://click.deephire.com/c/Steven_Gates">
        Request a Personal Demo
      </Button>
    ]}
  />
);

export default Demo