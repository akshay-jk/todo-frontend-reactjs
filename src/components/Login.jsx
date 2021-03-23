import React from "react";
import { connect } from 'react-redux';

import { logIn } from "../store/todoAction";

function Login(props) {

    return (
        // <form onSubmit={onLogin} >
        //     <div className="mb-3">
        //         <label className="mb-1">Username</label>
        //         <input className='form-control' type="text" name="username" placeholder="Username" />
        //     </div>

        //     <div className="mb-3">
        //         <label className="mb-1" >Password</label>
        //         <input className='form-control' type="password" name="password" placeholder="password" />
        //     </div>
        //     <div className="text-center">
        //         <button className="btn btn-outline-success" type="submit">Login</button>
        //     </div>
        // </form>

        <div>
            <button onClick={props.logIn} className="btn btn-outline-success">Login</button>
            <h4>{props.authStatus}</h4>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state.todo)
    return {
        authStatus: state.todo['isAuthenticated']
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: () => dispatch(logIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);