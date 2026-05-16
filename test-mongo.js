const { MongoClient } = require("mongodb");
const uri =
  "mongodb://aamiruddincacm_db_user:0145102376A@ac-qqfjoxe-shard-00-00.yizbyhb.mongodb.net:27017,ac-qqfjoxe-shard-00-01.yizbyhb.mongodb.net:27017,ac-qqfjoxe-shard-00-02.yizbyhb.mongodb.net:27017/?ssl=true&replicaSet=atlas-bhkqsi-shard-0&authSource=admin&appName=Cluster0";

async function test() {
  const c = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
  try {
    console.log("Connecting...");
    await c.connect();
    console.log("OK!");
    await c.close();
  } catch (e) {
    console.log("FAIL:", e.message);
  }
}
test();
