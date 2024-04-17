const net = require("net");
const { IP, PORT, PLAYER_NAME } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write(`Name: ${PLAYER_NAME}`);
  })

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;