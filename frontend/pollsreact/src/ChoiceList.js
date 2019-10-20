import React from 'react';
class ChoiceList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    isLoading: true,
    users: [],
    error: null,
    count:0,
    choice: "..",
    voteCount: 0,
    quesNo: 0,
    ch_id: 0
  }
  handleChange(val, ques, choice_id, event) {
    console.log("Votes ", val.votes);
    console.log("qs_id ", ques.question);
    console.log("ch_id ", choice_id.id);
    
    this.setState({
      choice: event.currentTarget.value ,
      voteCount: val.votes,
      quesNo: ques.question,
      ch_id: choice_id.id
      
    });
  }
  handleClick(event) {
    event.preventDefault();

    this.setState({voteCount: this.state.voteCount + 1}, () => {
      console.log("now", this.state.voteCount)
  });
    console.log("Votes on click", this.state.voteCount);
    //const incVote= this.state.voteCount +1
    const someData = {
      "choice_text": this.state.choice,
      "votes": this.state.voteCount + 1,
      "question": this.state.quesNo
  }
  console.log("somedata:" ,someData);
  console.log("qs_no", this.state.quesNo);
    const putMethod = {
      method: 'PUT', 
      headers: {
       'Content-type': 'application/json; charset=UTF-8' 
      },
      body: JSON.stringify(someData) 
     }
     
     fetch('http://localhost:8000/api/polls/choice/'+this.state.ch_id+'/', putMethod)
     .then(response => response.json())
     .then(data => console.log(data)) 
     .catch(err => console.log(err));
    
    alert(`You chose ${this.state.choice}.`);

  }

  componentDidMount() {
    this.fetchChoices();
  }

  fetchChoices() {
    fetch(`http://localhost:8000/api/polls/choice/`)
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
    // this.setState({voteCount: 2});
  return (
    <React.Fragment>
      {/* in choice component */}
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.filter(users => users.question == this.props.qs_id).map(user => {
          const { id, choice_text, votes, question } = user;
          // this.setState({ voteCount: {votes} + 1 });
          return (
              // {/* <p>Id: {id}</p> */}
              <div>
              {/* <li>{choice_text}: {votes}</li> */}
              {/* {this.state.voteCount}vtcnt */}
              <label>
              {/* {this.state.choice == {choice_text}} ,,, true or false */}
            <input
              type="radio"
              value={choice_text}
              // valueSelected={choice_text}
              onChange={this.handleChange.bind(this, {votes}, {question}, {id})}
              checked={this.state.choice === user.choice_text}
            />
            {choice_text} : {votes} 
            {/* ::::::{this.state.choice === user.choice_text}:123 {this.state.choice} :  456: {choice_text} */}
          </label>
          </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
      {/* {votes} :: votes */}
      {/* this.setState({ voteCount: this.state.voteCount + 1 }); */}
      <button onClick={this.handleClick}>Click to vote</button>
    </React.Fragment>
  );
  }
}
export default ChoiceList;