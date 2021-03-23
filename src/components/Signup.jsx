import React from "react";

function Signup() {
    function onSignup(e) {
        e.preventDefault();
        let phone = e.target[0].value;
        let username = e.target[1].value;
        let password = e.target[2].value;
    }

    return (
        <form onSubmit={onSignup} >
            <div className="mb-3">
                <label className="mb-1"> Mobile</label>
                <input className='form-control' type="text" name="phone" placeholder="Mobile" />
            </div>
            <div className="mb-3">
                <label className="mb-1">Username</label>
                <input className='form-control' type="text" name="username" placeholder="Username" />
            </div>

            <div className="mb-3">
                <label className="mb-1">Password</label>
                <input className='form-control' type="password" name="password" placeholder="password" />
            </div>
            <div className="text-center">
                <button className="btn btn-outline-success" type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default Signup;