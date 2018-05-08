const ws = new WebSocket('ws://localhost:9002/')

ws.onopen = () => {
  ws.send('大家好')
}

ws.onmessage = (data) => {
  const content = document.getElementById('content')
  content.innerHTML += data.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}
