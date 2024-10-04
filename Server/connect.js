import mysql from "mysql";

export const db = mysql.createConnection({
  host: "153.92.15.9",
  user: "u674260424_ims",
  password: "Kchordgroup*789789",
  database: "u674260424_ims",
  connectTimeout: 10000, // Timeout set to 10 seconds (10000 milliseconds)
});
