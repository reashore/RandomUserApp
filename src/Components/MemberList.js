
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
        this.setState({ loading: true });
        const onsuccess = members => { this.setState({ members, loading: false }) };
        const onerror = error => { this.setState({ error, loading: false }) };
        getMembers(this.props.count).then(onsuccess, onerror);
    }

    componentWillUpdate() {
        //console.log("componentWillUpdate");
    }

    render() {
        const { members, loading, error } = this.state;
        let result;
        let errorResult;

        if (loading) {
            result = <span>Loading Members</span>;
        } else if (members.length) {
            result = members.map((user, i) => <Member key={i} {...user} />);
        } else {
            result = <span>No members loaded</span>;
        };       
        
        if (error) {
            errorResult = <p>Error loading members: error</p>;
        } else {
            errorResult = "";
        }

        return (
            <div>
                { result }
                { errorResult }
            </div>
        );
    }
}

export default MemberList;
