const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: MBW");
    // conn.write("Move: up");
  })

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;