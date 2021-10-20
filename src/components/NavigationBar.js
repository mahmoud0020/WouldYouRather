import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, Link,Redirect } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {LogoutAuthedUser} from '../actions/authedUser'
 class NavigationBar extends Component {
    state ={
        loggedIn:true
    }
    render() {
        const {user ,dispatch} =this.props;
        
        const handleLogoutUser=()=>{
            dispatch(LogoutAuthedUser())
            this.setState({loggedIn:false})
            
        }
        if(!this.state.loggedIn){
            return <Redirect to={{pathname: '/'}}></Redirect>;
        }
        return (
            <div>
                <Navbar expand="lg" bg="light" variant="light" className="my-3 border">
				<Navbar.Brand as={Link} to="/">
					<h3>
						WouldYouRather?
					</h3>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/home" exact>Home</Nav.Link>
						<Nav.Link as={NavLink} to="/add">Add Question</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
					</Nav>
					<Nav className="align-items-start">
						<Navbar.Text>{user !== undefined ? user.name : ''}</Navbar.Text>
						<Image
                            src={user.avatarURL}
                            roundedCircle
                            fluid
                            width="40"
                            height="40"
                            className="mx-3"
                            alt="user avatar"/>
						<Button
							variant="outline-dark"
							onClick={handleLogoutUser}
                            className="mt-3 mt-lg-0"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
            </div>
        )
    }
}
function mapStateToProps({users,authedUser}){
    return {
        user:users[authedUser]
    }
}

export default connect(mapStateToProps)(NavigationBar)