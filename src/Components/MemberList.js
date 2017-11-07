
import React, { Component } from 'react';
import Member from './Member';
import getMembers from './getMembers';

class MemberList extends Component {
    constructor(props) {
        super(props);
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

    render() {
        const { members, loading, error } = this.state;
        let successResult;
        let errorResult;

        if (loading) {
            successResult = <span>Loading Members</span>;
        } else if (members.length) {
            successResult = members.map((user, i) => <Member key={i} {...user} />);
        } else {
            successResult = <span>No members loaded</span>;
        };

        if (error) {
            errorResult = <p>Error loading members: error</p>;
        } else {
            errorResult = "";
        }

        return (
            <div>
                <div>{successResult}</div>
                <div>{errorResult}</div>
            </div>
        );
    }
}

export default MemberList;
