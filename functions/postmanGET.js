exports = function(payload) {
  const mongo = context.services.get("Cluster0");
  const coll = mongo.db("alarmStatus").collection("lockedStatus");
  return  coll.find({}).limit(10).toArray();
};
