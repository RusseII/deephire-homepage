// Import Dependencies
const url = require('url')
const MongoClient = require('mongodb').MongoClient
const ObjectID =require('mongodb').ObjectID
var moment = require('moment');
const sendMsg = require('./test')

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri: string) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db('content')

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}


const getData = async (db, days, col) => {
  const sendTime = moment().subtract(days, 'days') / 1000
  return db.collection(col).count( {
    _id: {
      $gt: ObjectID.createFromTime(sendTime),
    },
    createdBy: { $not: /deephire/i},
    owner:  { $not: /deephire/i},
    candidateEmail:  { $not: /deephire/i}
  })
}
// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {

  const days = req.query.days || 7
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI)


const data = []
  // Select the "users" collection from the database
data.push(getData( db,days,'live'))
data.push(getData( db,days,'videos'))
data.push(getData( db,days,'companies'))
data.push(getData( db,days,'shortlists'))
data.push(getData( db,days,'interviews'))
const info = await Promise.all(data)
const [liveInterviews, oneWayInterviews, companies, shareLinks, jobs] = info

  // Respond with a JSON string of all users in the collection
  const stats = {days, liveInterviews, oneWayInterviews, companies, shareLinks, jobs}
  await sendMsg(JSON.stringify(stats, null, 2))

  res.status(200).json(stats)
}