import React from "react"
import { Link } from "gatsby"

import { Alert, Tag, Button } from 'antd'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Page from "../components/Home/index.jsx"
import ClientOnly from '../components/clientOnly'


const IndexPage = () => (
    <> <SEO title="Video Interviews" />
        <Alert closable style={{ textAlign: 'center' }} showIcon={false} type='info' message={<div><Tag color="blue">New</Tag> <>Live Interviews built for recruiters.</><Link style={{marginLeft: 8}} to='/live-interviews'>Learn More</Link></div>} banner />
        <ClientOnly>    <Page />    </ClientOnly>
    </>
)

export default IndexPage
