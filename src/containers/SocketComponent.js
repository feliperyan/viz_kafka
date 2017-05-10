import React from 'react'
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { push_update_from_websocket } from '../store/actions';


let url = 'http://localhost:5000';


const SocketComponent = ({ dispatch }) => {
    
    let socket = io.connect(url);    
    
    socket.on('connect', (response) => {
        console.log('connected first');
        socket.emit('ping', {data: 'Client connected!'});
        dispatch(push_update_from_websocket(response));
    });

    return (
        <p>
            this is the socket component
        </p>
    );
}

export default connect()(SocketComponent);