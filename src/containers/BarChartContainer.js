import { connect } from 'react-redux';
import BarChart from '../components/BarChart';
import { get_chart_1_selector } from '../store/reducer';


const mapStateToProps = (state) => {
    const data_from_selector = get_chart_1_selector(state);
    return {
        data: data_from_selector.data,
    }
}

const BarChartContainer = connect(mapStateToProps)(BarChart);

export default BarChartContainer;