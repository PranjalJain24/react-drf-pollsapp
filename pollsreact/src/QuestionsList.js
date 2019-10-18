import React from 'react';
import SingleQuestion from './SingleQuestion.js'


class QuestionsList extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  }
  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    fetch(`http://localhost:8000/api/polls/question/`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, users, error } = this.state;
  return (
    <React.Fragment>
      <h4>List of Questions</h4>
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.map(user => {
          const { id, title } = user;
          return (
            <div>
              <SingleQuestion question = {user}/>
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </React.Fragment>
  );
  }
}
export default QuestionsList;
