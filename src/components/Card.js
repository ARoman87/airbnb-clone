import React from 'react';
import star from "../assets/Star 1.png";
import group from "../assets/Group 80.png";


export default function Card(props) {
    return(
        <div className='card-container'>
            <div className="card">

                <img src={props.data.coverImg} alt="Katie Zaferes"></img>
                {props.data.openSpots === 0 && <img src={group} alt="Grouping" className='group'></img>}
                
                <p><img src={star} alt="star" className="starImage"></img>{props.data.stats.rating}<span>({props.data.stats.reviewCount}) • {props.data.location} </span></p>
                <p>{props.data.title}</p>
                <p><strong>From ${props.data.price}</strong> / person</p>

            </div>

            

        </div>

        
    )
}