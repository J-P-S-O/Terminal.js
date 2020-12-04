function connect(port) {
 return new Promise(resolve => {
  const socket = net.createConnection(port, '127.0.0.1', () => {
   socket.write('GET http://127.0.0.1:8080/ HTTP', () => {
    socket.destroy();
    resolve();
   });
  });
 });}
