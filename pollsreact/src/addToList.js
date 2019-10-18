
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>Questions</h3>
//         <QuesList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-ques">
//             Enter your question..
//           </label>
//           <br></br>
//           <input
//             id="new-ques"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <br></br>
//           <br></br> 
//           <button>
//             Add this to quesList
//             {/* {this.state.items.length + 1} */}
//           </button>
//           <br></br> 
//           {/* <br></br>  */}
//           <hr></hr>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class QuesList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('todos-example')
// );