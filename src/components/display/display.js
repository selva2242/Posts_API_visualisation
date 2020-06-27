import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Display = ({post, id}) => {
    const [comment, setComment] = useState('')

    useEffect(()=>{
        axios.get("/posts/"+{id})
        .then(response=>setComment(response.data))
        .catch(err=>console.log(err))
    }, [])


    return(
        <div>
            <div className="post">
            <h5>{post.id}</h5>
            <h4>{post.title}</h4>
            <h5>{post.body}</h5>
            </div>
            <div className="comments">
                comments<br/>
                {
                    comment==" " ? <h6>loading</h6> : <h6>{comment}</h6> 
                }
            </div>
        </div>
    )
}

export default Display;