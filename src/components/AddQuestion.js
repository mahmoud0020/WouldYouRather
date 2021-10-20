import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {handleAddQuestion} from '../actions/questions'
 class AddQuestion extends Component {
    state={
        optionOne:'',
        optionTwo:'',
        GoHome:false
    }
    handleChange=(e)=>{
        const name =e.target.name;
        const value =e.target.value;
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {optionOne,optionTwo}=this.state;
        const {dispatch}= this.props;
        dispatch(handleAddQuestion(optionOne,optionTwo))
        this.setState({
            optionOne:'',
            optionTwo:'',
            GoHome :true
        })
    }
    render() {
        const { optionOne, optionTwo, GoHome } = this.state;
        if(GoHome === true )
        {
            return <Redirect to='/home'></Redirect>
        }
        return (
            <div>
                <Container>
                    <NavigationBar></NavigationBar>
                    <h2 className="text-center my-3">
                        <small>Would You Rather...</small>
                    </h2>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>
                            <Card bg="light" className="m-3 text-center">
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="optionOne">
                                            <Form.Label>Choice One</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="optionOne"
                                                value={optionOne}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <h3>
                                            <small>OR</small>
                                        </h3>
                                        <Form.Group controlId="optionTwo">
                                            <Form.Label>Choice Two</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="optionTwo"
                                                value={optionTwo}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Button
                                            type="submit"
                                            variant="outline-dark"
                                            disabled={optionOne === '' || optionTwo === ''}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
export default connect()(AddQuestion)