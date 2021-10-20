import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import { Container } from 'react-bootstrap'

 class LeaderboardPage extends Component {
    render() {
        const {userIDs} =this.props;
        return (
            <div>
                <Container>
                    <NavigationBar></NavigationBar>
                    <h2 className="text-center my-3">
                        <small>Welcome To LeaderBoard</small>
                    </h2>
                    {
                        userIDs.map((id)=>{
                            return <UserInfo key={id} id={id}></UserInfo>
                        })
                    }
                </Container>
                
            </div>
        )
    }
}
function mapStateToProps({ users }) {
	//sort id by the desc score for each user
	const SortUserIds = Object.keys(users).sort((idA, idB) => {
		const scoreUserA = Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreUserB =Object.keys(users[idB].answers).length + users[idB].questions.length;
        const TotalScore =scoreUserB - scoreUserA
		return TotalScore;
	});

	return {
		userIDs: SortUserIds
	};
}
export default connect(mapStateToProps)(LeaderboardPage);