import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

 class UserInfo extends Component {
    render() {

        const { user } = this.props;
		const { name, answers, questions } = user;

        return (
            <div>
                <Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-3">
						<Card.Header>
                        <Image
                            src={user.avatarURL}
                            roundedCircle
                            fluid
                            width="40"
                            height="40"
                            className="mx-3"
                            alt="user avatar"/>
							{name}
						</Card.Header>
						<Card.Body className="d-flex justify-content-center">
							<Card.Text>
								Answered Questions: {Object.keys(answers).length}
								<br />
								Created Questions: {questions.length}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							Score: {Object.keys(answers).length + questions.length}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
            </div>
        )
    }
}
function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}
export default connect(mapStateToProps)(UserInfo)