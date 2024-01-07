import { MongoClient, Db, Collection } from 'mongodb'


const uri = `mongodb+srv://etclubdev:duy23082003@et.zrkqtv1.mongodb.net/?retryWrites=true&w=majority

`

class DatabaseService {
  client
  db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db("et_db")
  }
  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (err) {

      console.log('error', err)
      throw err
    } 
  }
  get banners() {
    return this.db.collection("banners")
  }
  get competitions() {
    return this.db.collection("competitions")
  }
  get etNews() {
    return this.db.collection("et_news")
  }
  get feelings() {
    return this.db.collection("feelings")
  }
  get competition_results() {
    return this.db.collection("competition_results")
  }
  get sponsors() {
    return this.db.collection("sponsors")
  }
  get milestones() {
    return this.db.collection("milestones")
  }
  get members() {
    return this.db.collection("members")
  }
  get terms() {
    return this.db.collection("terms")
  }
  get refreshTokens() {
    return this.db.collection("refresh_tokens")
  }
  get users() {
    return this.db.collection("users")
  }
}
//tạo object từ DatabaseService
const databaseService = new DatabaseService()
export default databaseService
