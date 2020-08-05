import { NowRequest, NowResponse } from '@vercel/node'
const sendMsg = require('./test').sendMsg

const handler = async (req: NowRequest, res: NowResponse) => {
  if (req.body) {
    const bodyObj = JSON.parse(req.body)
    const pretty = JSON.stringify(bodyObj, null, 2)
    const r = await sendMsg(pretty)
    res.json({ status: r.status })
  }
  else {
    res.status(400).json({ status: "you need to send a json" })
  }
}

// const allowCors = fn => async (req, res) => {
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   // another option
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
//   res.setHeader(
//     'Access-Control-Allow-Headers', '*'
//   )
//   if (req.method === 'OPTIONS') {
//     res.status(200).end()
//     return
//   }
//   return await fn(req, res)
// }

module.exports = handler
