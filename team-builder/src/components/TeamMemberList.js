import React, {useState} from 'react';

function TeamMemberList(props){
    console.log("props", props)
    const {memberList} = props;
    console.log("props", memberList)
    
    return (
        <div> 
            <h2>Team Members!</h2>
            <div className="members-container">
                {memberList.map(member => (
                    <div className="members-card">
                        <h3>{member.name}</h3>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamMemberList;