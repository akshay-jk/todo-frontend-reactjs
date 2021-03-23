import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function SecuredRoute(props) {
    return (
        props.isAuthenticated ? <Route path={props.path} component={props.component} /> : <Redirect to='/login' />
    );
}

const mapStateToProps = state => {
    const isAuthenticated = state.todo.isAuthenticated;
    return { isAuthenticated };
}

export default connect(mapStateToProps, null)(SecuredRoute);
