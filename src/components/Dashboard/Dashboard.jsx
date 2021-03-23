import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Additem from './Additem';
import Viewitem from './Viewitem';

function Dashboard(props) {
    function toggleValue(){
        //
    }
    return (
        <div>
            <h1>Dashboard</h1>
            { props.toggleView && <Additem />}
            { !props.toggleView && <Viewitem />}
        </div>
    );
}

const mapStateToProps = state => {
    const toggleView = state.toggleView;
    return { toggleView }
};

export default connect(mapStateToProps)(Dashboard);