import React, {useState} from 'react';

function TeamMemberList(props){
    console.log("props", props)
    const {memberList} = props;
    console.log("props", memberList)
    
    return (
        <div className="members-container">
            {memberList.map(member => (
                <div className="members-card">
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMemberList;