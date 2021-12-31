const { MongoClient } = require("mongodb")
const env = require('dotenv').config()

const host = process.env.dbHost
const port = process.env.dbPort
const name = process.env.dbName


const client = new MongoClient(`mongodb://${host}:${port}`)

async function main(callback){
	client.connect()
				.then(async result =>{
					const db = await client.db(name)
					return callback(null, db)
				})
				.catch(err => callback(err))
}

module.exports = main 