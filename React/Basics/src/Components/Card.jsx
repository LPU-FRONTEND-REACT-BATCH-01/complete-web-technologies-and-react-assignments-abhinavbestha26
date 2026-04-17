import React from 'react'

// export const Card = ({users:{id,name,age="Not given"}}) => {
//     // let {users:{id,name}} = props
//   return (
//     <div>
//         <h1>{name}</h1>
//         <h2>{id}</h2>
//         <h3>{age}</h3>
//     </div>
//   )
// }

export default function Card(props) {
  console.log(props);
  
  return (
    <div>{props.children[1]}</div>
  )
}
