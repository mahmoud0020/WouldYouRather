import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import {connect} from 'react-redux';
import UnAnswerQuestion from '../components/UnAnswerQuestion'
import AnswerQuestion from '../components/AnswerQuestion'
import { Container } from 'react-bootstrap'

 class QuestionPage extends Component {
    render() {
        const { autherUserAnsweres, match } = this.props;
        
		const id = match.params.id;
		const answered = autherUserAnsweres.hasOwnProperty(id) ? 1 : 0;

        return (
            <div>
                <Container>
                    <NavigationBar></NavigationBar>
                    <h2 className="text-center my-3">
                        <small>Would You Rather...</small>
                    </h2>
                    {answered ? <AnswerQuestion id={id} /> : <UnAnswerQuestion id={id} />}
                </Container>
                
               
            </div>
        )
    }
}
function mapStateToProps({ authedUser, users }) {
	const autherUserAnsweres = users[authedUser].answers;

	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(QuestionPage);