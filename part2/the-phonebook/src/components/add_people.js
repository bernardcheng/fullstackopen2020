import React from 'react' 

const AddPeople = ({newName, newNum, addPerson, handleNameChange, handleNumChange}) => {

    return(
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNum} onChange={handleNumChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPeople