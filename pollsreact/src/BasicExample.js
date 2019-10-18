import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionsList from './QuestionsList.js';

function BasicExample() {
  return (
    <Router>
      <div>
        {/* <ul> */}
        {/* <li> */}
           <h3> <Link to="/ques">'</Link>
          {/* </li>  */}
          {/* <li> */}
            <Link to="/about">Questions' List'</Link></h3>
          {/* </li> */}
          {/* {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          
        {/* </ul> */}
        <hr />

        <Route path="/ques" component={About} />
        <Route exact path="/about" component={List} />
        
        {/* <Route path="/topics" component={Topics} /> */}
        {/* <Route path="question/:id" component={SingleQuestion} /> */}
        
      </div>
    </Router>
  );
}

function List() {
  return (
    <div>
      <h2><QuestionsList /> </h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h5>Click on above link to display Questions</h5>
    </div>
  );
}

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default BasicExample;