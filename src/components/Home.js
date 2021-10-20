import React, { Component } from 'react'
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import NavigationBar from '../components/NavigationBar'
import QuestionCard from '../components/QuestionCard';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap'


class Home extends Component {
    render() {
        const {AnswerdQuestionIds,UnAnswerQuestionIds} = this.props;
        console.log(UnAnswerQuestionIds);
        return (
            <div>
                <Container>
                <NavigationBar></NavigationBar>
                <Tabs>
					<Tab eventKey="unanswered" title="Unanswered Questions">
                        {
                            UnAnswerQuestionIds.length ?(
                                UnAnswerQuestionIds.map((questionId)=>{
                                    return <QuestionCard  key={questionId} id={questionId}></QuestionCard>
                                })
                            ):(
                                <h2 className="text-center">No unAnswer question found  ! </h2>
                            )
                        } 
						
					</Tab>
					<Tab eventKey="answered" title="Answered Questions">
                        {
                            AnswerdQuestionIds ? (
                                AnswerdQuestionIds.map((AnswerId)=>{
                                    return <QuestionCard key={AnswerId} id={AnswerId} ></QuestionCard>
                                })
                            ):(
                                <h2 className="text-center">No  question found ! </h2>
                            )
                        }
                        
					</Tab>
				</Tabs>
                
                </Container>
                
            </div>
        )
    }
}
function mapStateToProps({authedUser,questions,users}){
    return {
        AnswerdQuestionIds: Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        UnAnswerQuestionIds: Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Home)
