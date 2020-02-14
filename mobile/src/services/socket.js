import socketio from 'socket.io-client';

//const socket = socketio('http://localhost:3333',{
const socket = socketio('http://10.6.11.74:3333',{
    autoConnect: false
})

function connect(latitude, longitude, techs){

    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }
    socket.connect()
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect
}