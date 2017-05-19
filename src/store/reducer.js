import Immutable from 'seamless-immutable';
import { CHART_1, RECEIVED_WEBSOCKET } from './actions';

const initialState = Immutable(
    {
        data_chart_1: [
            {name: 'Train', returning: 1000, new: 2400, amt: 2400},
            {name: 'Taxi', returning: 1000, new: 1398, amt: 2210},
            {name: 'Parking', returning: 1000, new: 9800, amt: 2290},
            {name: 'Terminal Transfer', returning: 1000, new: 3908, amt: 2000},            
        ],
        
        data_chart_2: [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ],
        
        status: "done"
    }
)

const data_store = (state = initialState, action = {}) => {
    switch (action.type){
        case CHART_1:
            console.log(action.data);
            console.log('got action');
            return state.merge({data_chart_1: action.new_data});    
        case RECEIVED_WEBSOCKET:
            console.log('RECEIVED_WEBSOCKET action kicked off and was captured by the reducer');
        default:
            console.log(state);
            console.log('default...');
            return state;
    }
}

export default data_store;

// REDUCERS:

export const get_chart_1_selector = (state) => {
    return {
        data: state.data_chart_1
    }
}