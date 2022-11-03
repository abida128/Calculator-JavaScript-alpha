import React from 'react';
//  import './style.css'
import Bootstrap from 'react-bootstrap';


const Card =(props)=> { 
    const {id , image , name, tittle} = props.user
  return (
    
    <>
    <div className='cards'>
        <div className='heading'>
          <h1>{id}</h1>
        </div>
        <div className='image'>
          <img src={image} alt=""  style={{width: "200px" , heght:"200px"}}/>

        </div>
        <div className='tittle'>
          <h5>{tittle}</h5>
          </div>
        <div className='tagname'>
          <p>{name}</p> 

          </div>
        </div>


    
    </>
         

)  
  
}

export default Card;