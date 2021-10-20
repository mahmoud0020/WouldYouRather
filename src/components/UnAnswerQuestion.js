import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { handleAddAnswerQuestion } from '../actions/questions';
import { formatDate } from '../utils/helpers';
import Error404 from '../components/Error404';
import Image from 'react-bootstrap/Image';
import {Redirect} from 'react-router-dom';
 class UnAnswerQuestion extends Component {
    state={
        MsgError:''
    }
    handleSubmit =(e,id)=>{
        e.preventDefault();
        const AnswerSelect =this.form.answer.value;
        const {dispatch} =this.props;

        if(AnswerSelect !== ''){
            dispatch(handleAddAnswerQuestion(id,AnswerSelect));
            return <Redirect to="\questions:id"></Redirect>
        }else{
            this.setState({
                MsgError:'you should make a choice '
            })
        }
    }
    render() {
        const { question, author } = this.props;
        const { optionOne, optionTwo, timestamp, id } = question;
        const { name, avatarURL } = author;
        const { MsgError } = this.state;
        if (question === null) {
			return <Error404 />;
		}
        return (
            <div>
                <Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-3">
						<Card.Header>
                            <Image
                                src={avatarURL}
                                roundedCircle
                                fluid
                                width="40"
                                height="40"
                                className="mx-3"
                                alt="user avatar"/>
							{name} asks:
						</Card.Header>

						<Card.Body className="d-flex justify-content-center">
							<Form
								onSubmit={(e) => this.handleSubmit(e,id)}
								ref={(f) => (this.form = f)}
							>
								{MsgError ? (
									<p className="text-danger">{MsgError}</p>
								) : null}
								<Form.Check
									custom
									type="radio"
									id="optionOne"
									label={optionOne.text}
									value="optionOne"
									name="answer"
									className="mb-2"
								/>
								<Form.Check
									custom
									type="radio"
									id="optionTwo"
									label={optionTwo.text}
									value="optionTwo"
									name="answer"
									className="mb-2"
								/>
								<Button type="submit" variant="outline-dark">
									Vote
								</Button>
							</Form>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">{formatDate(timestamp)}</small>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
            </div>
        )
    }
}
function mapStateToProps({questions,users},{id}){
    return {
		question: questions[id] ? questions[id] : null,
		author: questions[id] ? users[questions[id].author] : null,
		
	};
}
export default connect(mapStateToProps)(UnAnswerQuestion)