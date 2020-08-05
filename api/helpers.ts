import fetch from 'node-fetch'


const sendMsg = async (text) => {
  const url = `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage`
  const chat_id = -372756431
  const data = { parse_mode: 'MarkdownV2', chat_id, text: `\`\`\`json \n${text}\`\`\`` }
    console.log(data)
    return fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
}



module.exports.sendMsg = sendMsg