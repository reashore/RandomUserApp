
import React, { Component } from 'react';
import Member from './Member';
import getMembers from './getMembers';

  class MemberList extends Component {
    constructor() {
      super();
      this.state = {
        members: [],
        loading: false,
        error: null
      }
    }
  
    componentWillMount() {
      this.setState({loading: true});
      const onsuccess = members => {this.setState({members, loading: false})};
      const onerror = error => {this.setState({error, loading: false})};
      getMembers(this.props.count).then(onsuccess, onerror);
    }
  
    componentWillUpdate() {
      console.log("componentWillUpdate");
    }
  
    render() {
      const {members, loading, error} = this.state;
      return (
        <div>
          {/* refactor: nested conditional operators are extremely hard to read */}
          {loading ? <span>Loading Members</span> : members.length ? members.map((user, i) => <Member key={i} {...user}/>) : <span>No members loaded</span>}
          {error ? <p>Error loading members: error</p> : ""}
        </div>
      );
    }
  }

  export default MemberList;
