const socket = new WebSocket("wss://echo.websocket.events");

socket.onopen=()=>{
    console.log("connected");
    socket.send("hello");
    
}
socket.onmessage =(events)=>{
  console.log("message recieverd" , events.data);
  
}
socket.onerror =(err)=>{
    console.log("error", err);
    
}
socket.onclose =()=>{
    console.log("connection closed");
    
}