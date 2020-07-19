import PropTypes from "prop-types"
import React from "react"
import {PageHeader, Button, Divider} from 'antd'
import DeepHireLogo from '../assets/deephireLogo.svg'

console.log(DeepHireLogo)
const Header = ({ siteTitle }) => (
  <PageHeader onBack={() => window.open("https://deephire.com", "_self")} backIcon={<DeepHireLogo style={{width:32, height:32}}/>} title={<> <>{siteTitle}</></>}    extra={[
    <Button type='text' key="0">Pricing</Button>,
    <Button type='text' href='https://blog.deephire.com' key="1">Blog</Button>,
    <Divider type="vertical" />,
    <Button type='text' href='https://recruiter.deephire.com' key="2">Sign In</Button>,
    , 
    <Button key="1" type="primary">
      Start Free Trial
    </Button>,,
  ]} />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
