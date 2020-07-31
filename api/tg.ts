import { NowRequest, NowResponse } from '@vercel/node'
import fetch from 'node-fetch'

const url = `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage`

const chat_id = "-372756431"

const handler = async (req: NowRequest, res: NowResponse) => {
  if (req.body) {
    const bodyObj = JSON.parse(req.body)
    const pretty = JSON.stringify(bodyObj, null, 2)
    const data = { parse_mode: 'MarkdownV2', chat_id, text: `\`\`\`json \n${pretty}\`\`\`` }
    console.log(data)
    const r = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    res.json({ status: r.status })
  }
  else {
    res.status(400).json({ status: "you need to send a json" })
  }
}

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another option
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

module.exports = allowCors(handler)