import React, {useState} from 'react';

function Form(props) {
    // console.log(props)
    return (
        <div>
            <form>
                <label> Name:
                    <input 
                        type="text"
                        placeholder="Human Being"
                    />
                </label>
                <label> Email:
                    <input 
                        type="text"
                        placeholder="human@world.com"
                    />
                </label>
                <label> Role:
                    <input 
                        type="text"
                        placeholder="Not an alien"
                    />
                </label>
                <button>Add Team Member</button>
            </form>
        </div>
    )
}

export default Form;