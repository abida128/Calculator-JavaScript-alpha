import React from 'react';
import Card from '../Cards';
// import "../node_modules/bootstrap/scss/bootstrap";

import image1 from '../../assets/image 12.jpg';
import image2 from '../../assets/image 13.jpg';
import image3 from '../../assets/image 14.jpg';
import image4 from '../../assets/image 16.jpg';
import image5 from '../../assets/image 17.jpg';
import image6 from '../../assets/image 18.jpg';
import image7 from '../../assets/image 19.jpg';
import image8 from '../../assets/image 110.jpg';
import image9 from '../../assets/image 111.jpg';
import image10 from '../../assets/image 112.jpg';
import image11 from '../../assets/image 11.jpg';
//  import { eventWrapper } from '@testing-library/user-event/dist/utils';



const  Users =()=>{

        const data =[

                {id:1, image: image1 , name:"image1", tittle: "Wallpaper"},
                {id:2, image: image2 , name:"image2" , tittle: "Wallpaper"},
                { id:3, image: image3 , name:"image3" , tittle: "Wallpaper"},
                {id:4, image: image4 , name:"image4" , tittle: "Wallpaper"},
                {id:5, image: image5 , name:"image5" , tittle: "Wallpaper"},
                {id:6, image: image6 , name:"image6" , tittle: "Wallpaper"},
                {id:7,image: image7 , name:"image7" , tittle: "Wallpaper"},
                {id:8,image: image8 , name:"image8" , tittle: "Wallpaper"},
                {id:9,image: image9 , name:"image9" , tittle: "Wallpaper"},
                {id:10,image: image10 , name:"image10", tittle: "Wallpaper"},
                {id:11,image: image11 , name:"image11" , tittle: "Wallpaper"},

                

        ]



// const Users =() =>{
//     const data = [
//          { id: 1, name: "ali"},
//          { id: 2, name: "aliya"},
//          { id: 3, name: "alishan"},


    // ]
    return(
        <>
            {/* <div className="user">{user.id}{user.image} */}
            {/* </div> */}
                {/* {data.map((user)=> ( 
                    <Card user= {user}/>

            ))}  */}
            {/* <Card/> */}



            <div className='main-div'>

                <div style={{display: "flex", justifyContent: "space-around" , flexWrap:"wrap"}}>
                {data.map((user)=> ( 
                    <Card user= {user}/>

            ))}
                </div>
             
            </div>

            {/* <Card /> */}

        </>
    )
}

export default Users;