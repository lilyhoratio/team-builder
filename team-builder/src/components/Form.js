import React, {useState} from 'react';

function Form(props) {

    const [member, setMember] = useState({ name: "", email: "", role: ""});

    const changeHandler = (event) => {
        console.log(member)
        setMember({...member, [event.target.name] : event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(member)
        props.setMemberList(memberList => [...memberList, member])
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label> Name:
                    <input 
                        type="text"
                        placeholder="Human Being"
                        onChange={changeHandler}
                        name="name"
                        value={member.name}
                    />
                </label>
                <label> Email:
                    <input 
                        type="text"
                        placeholder="human@world.com"
                        onChange={changeHandler}
                        email="email"
                        value={member.email}
                    />
                </label>
                <label> Role:
                    <input 
                        type="text"
                        placeholder="Not an alien"
                        onChange={changeHandler}
                        role="role"
                        value={member.role}
                    />
                </label>
                <button>Add Team Member</button>
            </form>
        </div>
    )
}

export default Form;