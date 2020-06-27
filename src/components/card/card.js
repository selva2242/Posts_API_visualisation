import React from 'react'
import './card.css'

const Card = ({post}) => {

    let viewDetails = (id) => {
        console.log(id)
    }
    return(
        <div className="card">
            <h5>{post.id}</h5>
            <h4>{post.title}</h4>
            <h5>{post.body}</h5>
            <button onClick={()=>viewDetails(post.id)}>View Details</button>
        </div>
    )
}

export default Card;