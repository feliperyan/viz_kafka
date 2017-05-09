import React from 'react'
import { connect } from 'react-redux'
import { get_random_data } from '../store/actions'


const SimpleButton = ({dispatch}) => {

    return (
        <button onClick={e => {
            e.preventDefault();
            dispatch(get_random_data());
            }
        }
        >
            CLICK HERE
        </button>
    )

}

export default connect()(SimpleButton)