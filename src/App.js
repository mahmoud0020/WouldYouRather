import './App.css';
import { handleInitialData } from '../src/actions/shared';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import LeaderboardPage from './components/LeaderboardPage';
import QuestionPage from './components/QuestionPage';
import AddQuestion from './components/AddQuestion';
import Error404 from './components/Error404';
class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
  render() {
    const {authedUser} = this.props;
    return (
      <BrowserRouter>
        <div>
          {!authedUser ? <Login></Login>:
          <main>
            <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route  path='/questions/:id' component={QuestionPage}></Route>
              <Route exact path='/leaderboard' component={LeaderboardPage}></Route>
              <Route exact path='/add' component={AddQuestion}></Route>
              <Route component={Error404} ></Route>
            </Switch>
          </main>
          
          }
      </div>
      </BrowserRouter>
      
    )
  }
}
// we get intial authed user from store
function mapStateToProps({authedUser}){
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(App);