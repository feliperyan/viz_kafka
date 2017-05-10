export const CHART_1 = 'CHART_1';
export const RECEIVED_WEBSOCKET = 'RECEIVED_WEBSOCKET';


export function get_random_data () {
    return {
        type: CHART_1,
        new_data: [
            {name: 'Page A', uv: Math.floor(Math.random() * 10000), pv: 2400, amt: 2400},
            {name: 'Page B', uv: Math.floor(Math.random() * 10000), pv: 1398, amt: 2210},
            {name: 'Page C', uv: Math.floor(Math.random() * 10000), pv: 9800, amt: 2290},
            {name: 'Page D', uv: Math.floor(Math.random() * 10000), pv: 3908, amt: 2000},
            {name: 'Page E', uv: Math.floor(Math.random() * 10000), pv: 4800, amt: 2181},                
            {name: 'Page F', uv: Math.floor(Math.random() * 10000), pv: 3800, amt: 2500},
            {name: 'Page G', uv: Math.floor(Math.random() * 10000), pv: 4300, amt: 2100},
        ]        
    }
}

export function push_update_from_websocket(socket_message){
    return {
        type: RECEIVED_WEBSOCKET,
        message: socket_message
    }
}
