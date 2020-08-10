import React from 'react' 

const ViewPeople = ({filterPersons}) => {

    return(
        <div>
            {filterPersons.map(person => 
                <div key={person.name}>
                    {person.name} {person.number}
                </div>
                )
            }
        </div>
    )
}

export default ViewPeople 