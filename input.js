let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  })
  return stdin;
};

const messages = {
  1: "Hello!",
  2: "I'm hungry",
  3: "Ssssssss",
  4: "Goodbye!"
}

const handleUserInput = function(key) {
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === '\u0003') {
    process.exit();
  } else if (key in messages) {
    connection.write(`Say: ${messages[key]}`);
  }
};

module.exports = setupInput;