const { Pool } = require("pg");
let db;
if (process.env.NODE_ENV === "production") {
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Pool({ database: "gamer_hub" });
}

module.exports = db;
