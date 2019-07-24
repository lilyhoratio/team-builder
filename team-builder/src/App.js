import React, {useState} from 'react';
import './App.css';
import './index.css';

import Form from './components/Form.js';
import TeamMemberList from './components/TeamMemberList.js';
import teamMembers from './data.js';

function App() {

  const [memberList, setMemberList] = useState(teamMembers);
  // const [memberList, setMemberList] = useState([{name: "lily", email: "lily@gmail.com", role: "software engineer"}]);

  console.log(memberList)

  return (
    <div className="App">
      <Form memberList={memberList} setMemberList={setMemberList}/>
      <TeamMemberList memberList={memberList}/>
    </div>
  );
}

export default App;
