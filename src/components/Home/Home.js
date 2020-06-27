import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Card from '../card/card';
import './Home.css'
import Display from '../display/display';

/*
    https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/posts/1
https://jsonplaceholder.typicode.com/posts/1/comments

*/

const Home = () => {

    const [values, setValue] = useState({})

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setValue(response.data)
            console.log(values)
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className="container">
            {
             Object.keys(values).length===0 ? (
                 <h1>Loading</h1>
             )
             :
             (
                values.map(value=>
                    (
                        <h1 key={value.id}><Card post={value}/></h1>
                    )
                )  
             )
              
            }
        </div>
    )
}

export default Home;