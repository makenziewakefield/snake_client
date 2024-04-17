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

const movements = {
  w: "up",
  a: "left",
  s: "down",
  d: "right"
}

const messages = {
  1: "Hello!",
  2: "I'm hungry",
  3: "Ssssssss",
  4: "Goodbye!"
}

const handleUserInput = function(key) {
  if (key in movements) {
    connection.write(`Move: ${movements[key]}`);
  } else if (key === '\u0003') {
    process.exit();
  } else if (key in messages) {
    connection.write(`Say: ${messages[key]}`);
  }
};

module.exports = setupInput;