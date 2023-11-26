// init-mongo.js
db = db.getSiblingDB("e3ts_camp");
db.createUser({
  user: "e3camp_mongo",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "e3ts_camp",
    },
  ],
});
