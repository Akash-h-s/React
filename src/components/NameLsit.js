import React from 'react'
import { useParams } from 'react-router-dom';
import Person from './Person';
function NameLsit() {
    const users = [
  { id: 1, name: "Akash", skill: "JavaScript" },
  { id: 2, name: "Rohan", skill: "React" },
  { id: 3, name: "Sneha", skill: "Node.js" },
  { id: 4, name: "Megha", skill: "MongoDB" },
  { id: 5, name: "Vikram", skill: "TypeScript" }
];

 const personList=users.map(person=><Person key={person.id} person={person}/>)
  return (
    <div>
      {
       personList 
      }
    </div>
  )
}

export default NameLsit
