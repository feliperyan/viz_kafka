export const CHART_1 = 'CHART_1';
export const RECEIVED_WEBSOCKET = 'RECEIVED_WEBSOCKET';


export function get_random_data () {
    return {
        type: CHART_1,
        new_data: [
            {name: 'Train', returning: Math.floor(Math.random() * 10000), new: 2400, amt: 2400},
            {name: 'Taxi', returning: Math.floor(Math.random() * 10000), new: 1398, amt: 2210},
            {name: 'Parking', returning: Math.floor(Math.random() * 10000), new: 9800, amt: 2290},
            {name: 'Terminal Transfer', returning: Math.floor(Math.random() * 10000), new: 3908, amt: 2000},            
        ]        
    }
}

export function push_update_from_websocket(socket_message){
    return {
        type: RECEIVED_WEBSOCKET,
        message: socket_message
    }
}
