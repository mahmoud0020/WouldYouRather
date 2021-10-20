import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Error404 extends Component {
    render() {
        return (
            <div>
                <h1 className="display3 text-center">404 ERROR</h1>
                <h2 className="display3 text-center">Page Not found !</h2>
            <h1 className="display4 text-center">
				<Link to="/">Return to Home Page</Link>
			</h1>
            </div>
        )
    }
}
