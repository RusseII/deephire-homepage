import React, { useState } from "react";
import { Form, Input, Button, Card, InputNumber, Result } from "antd";

// const layout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 18 }
// };
 const Demo = () => {
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
    <Card style={{ width: 450 }}>
      {submitted ? (
        <SuccessResult firstName={submitted.firstName} />
      ) : (
        <Form
          layout="vertical"
          // {...layout}
          style={{ padding: 24 }}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your First Name!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Job Title"
            name="jobTitle"
            rules={[
              {
                required: true,
                message: "Please input your Job Title"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Work Email"
            name="workEmail"
            rules={[
              { required: true, message: "Please input your Email!" },
              {
                type: "email",
                message: "Please enter a valid Email!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Phone #" name="phoneNumber">
            <Input />
          </Form.Item>
          <Form.Item
            label="# of annual hires (estimated)?"
            name="hires"
            rules={[
              {
                required: true,
                message: "Please input estimated number of hires"
              }
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Request a Demo
            </Button>
          </Form.Item>
        </Form>
      )}
    </Card>
  );
};

const SuccessResult = ({ firstName }) => (
  <Result
    status="success"
    title={`Hello ${firstName}!`}
    subTitle="Someone from our team will be in touch with you soon."
    extra={[
      <Button type="primary" href="https://click.deephire.com/c/Steven_Gates">
        Schedule Demo Now
      </Button>
    ]}
  />
);

export default Demo