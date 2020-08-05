import React, { useState, useEffect } from "react"

import { notification, Modal, Typography } from "antd"

import { EmailForm } from "./Notification"

const OnLeave = () => {
  const [visible, setVisible] = useState(false)
  const [mouseAtTop, setMouseAtTop] = useState(false)

  const handleLeave = () => {
    // if #crisp isn't loaded by this time, then it will error.
    if (
      window.$crisp.get("user:email") ||
      sessionStorage.getItem("isExitIntentAlreadyShown") ||
      !mouseAtTop
    )
      return

    sessionStorage.setItem("isExitIntentAlreadyShown", "true")
    notification.close("ebook")
    setVisible(true)
  }

  const handleMove = event => {
    if (event.clientY < 100) {
      setMouseAtTop(true)
    } else {
      setMouseAtTop(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave)
    document.addEventListener("mousemove", handleMove)

    return () => {
      document.removeEventListener("mouseleave", handleLeave)
      document.removeEventListener("mousemove", handleMove)
    }
  }, [mouseAtTop])

  const next = () => {
    setVisible(false)
  }

  return (
    <Modal
      width={450}
      onCancel={() => setVisible(false)}
      footer={null}
      visible={visible}
    >
      <div style={{ textAlign: "center", fontSize: 23 }}>
        <Typography.Paragraph>Not ready to sign up today?</Typography.Paragraph>
        <Typography.Text>
          Enter your email and{" "}
          <Typography.Text strong> we'll send you a suprise!</Typography.Text>
        </Typography.Text>{" "}
        <span role="img" aria-label="smile">
          😍
        </span>
      </div>

      <EmailForm type="ebook modal" next={next}></EmailForm>
    </Modal>
  )
}

export default OnLeave
