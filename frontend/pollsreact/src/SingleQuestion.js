import React from 'react';
import ChoiceList from './ChoiceList.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SingleQuestion extends React.Component{
    constructor(props){
        super(props);
        this.AboutQs = this.AboutQs.bind(this);
    }  
    AboutQs() {
        return (
          <div>
            <h6>Click to display Choices</h6>
          </div>
        );
      }
    render() {
        const qid = this.props.question.id;
        return (
        <Router>
        <div>
        {/* <ul> */}
        {/* <li>ID: {this.props.question.id}</li> */}
          {/* <li> */}
          <Link to="/choice">'</Link>
            <Link to="/about">{this.props.question.title}'</Link>
          {/* </li> */}
        {/* </ul> */}
        <hr />
        <Route path="/choice" component={this.AboutQs} />
        <Route exact path="/about" component={() => <ChoiceList qs_id={qid} />} />
        
        {/* <button onClick={this.handleClick}>Submit Vote</button> */}
      </div>
    </Router>
        );
      }
       
    
}
export default SingleQuestion;