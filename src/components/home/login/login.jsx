import React from 'react';

export class Login extends React.Component {
    handleSubmit() {

    }

    render() {
        // const handleSubmit = this.props;
        return(
            <div className="signup-container">
                <h2 className="main-txt">Login form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="emal" className="form-control" placeholder="Enter your email id.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter your password.."></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}