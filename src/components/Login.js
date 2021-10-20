import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authedUser';
class Login extends Component {
	state = {
		errorMsg: '',
		loggedIn:false
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const userID = this.userID.value;
		const { dispatch } = this.props;
        

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
			this.setState({loggedIn:true})
		} else {
			this.setState({ errorMsg: 'You must choose a username' });
			
		}
	};

	render() {
		const { users } = this.props;
		// console.log(users)
		const { errorMsg } = this.state;
		let afterLogin='/home';
		if(this.state.loggedIn){
			return <Redirect to={afterLogin}></Redirect>;
		}
		return (

			<Row className="justify-content-center align-items-center min-vh-100">
				<Col xs={12} md={4}>
					<Card bg="light" className="text-center">
						<Card.Header>Login</Card.Header>
						<Card.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="formGridState">
									<Form.Label>UserName</Form.Label>
									{errorMsg ? (<p className="text-danger">{errorMsg}</p>) : null }
									<Form.Control
										as="select"
										ref={(id) => (this.userID = id)}
									>
										<option value="">Select user</option>
										{Object.keys(users).map((item) => (
											<option value={users[item].id} key={users[item].id}>
												{users[item].name}
											</option>
										))}
									</Form.Control>
								</Form.Group>
                                <br></br>
								<Button type="submit" variant="outline-dark">
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		users:users
	};
}

export default connect(mapStateToProps)(Login);
