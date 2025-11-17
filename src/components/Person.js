import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>Hi,Iam {person.name} i knows {person.skill}</h2>
    </div>
  )
}

export default Person
