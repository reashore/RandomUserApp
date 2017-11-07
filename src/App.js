
//import React, { Component } from 'react';
//import './App.css';

// const getMembers = count => new Promise((resolves, rejects) => {
//   const apiUrl = `https://api.randomuser.me/?nat=US&results=${count}`;
//   const request = new XMLHttpRequest();
//   request.open("GET", apiUrl);
//   request.onload = () => (request.status === 200) ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
//   request.onerror = err => rejects(err);
//   request.send();
// });

// const Member = ({email, picture, name, location}) =>
//   <div>
//     <img src={picture.thumbnail} alt="thumbnail"/>
//     <h1>{name.first} {name.last}</h1>
//     <p><a href={"mailto:" + email}>{email}</a></p>
//     <p>{location.city} {location.state}</p>
//   </div>;

// class MemberList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       members: [],
//       loading: false,
//       error: null
//     }
//   }

//   componentwillMount() {
//     this.setState({loading: true});
//     let onsuccess = members => {this.setState({members, loading: false})};
//     let onerror = error => {this.setState({error, loading: false})};
//     getMembers(this.props.count).then(onsuccess, onerror);
//   }

//   componentWillUpdate() {
//     console.log("componentWillUpdate");
//   }

//   render() {
//     const {members, loading, error} = this.state;
//     return (
//       <div>
//         // refactor nested conditional operators are extremely hard to read
//         {loading ? <span>Loading Members</span> : members.length ? members.map((user, i) => <Member key={i} {...user}/>) : <span>No members loaded</span>}
//         {error ? <p>Error loading members: error</p> : ""}
//       </div>
//     );
//   }
// }


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Random User App</h1>
//       </div>
//     );
//   }
// }

//export default App;
