import React from 'react'
import Card from './Card'

const User = () => {
    // let user1 = {
    //         id:1,
    //         name:"Abhinav",
    //         age:22,
    //         city:"Kurnool"
    //     }
    // let user2 = {
    //         id:2,
    //         name:"Simpi",
    //         age:22,
    //         city:"Kangda"
    //     }
  return (
    <>
        {/* <Card users={user1} /> */}
        <Card>
            <h1>This is the first Child</h1>
            <h2>This is the second child</h2>
        </Card>
    </>
  )
}

export default User