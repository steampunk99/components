import React from 'react'
import './index.css'
import UtilityCards from './UtilCard';


const CardContainer = () => {
    const cardData = [
        {
          "id":1,
          title: "Population Increased By",
          content: "14%",
          image:"/images/drop.png"
       
        },
        {
          "id":2,
          title: "Pipe Network was increased",
          content: "1,305 KM",
          image:"/images/tap.png"
       
        },
        {
          "id":3,
          title: "Water Subcribers",
          content: "857,347",
          image:"/images/home.png"
       
        },
        {
          "id":4,
          title: "New Water Subscribers",
          content: "54,697",
          image:"/images/hometap.png"
       
        },
        {
          "id":5,
          title: "Increased PSP by",
          content: "24,141",
          image:"/images/walk.png"
       
        },
        {
          "id":6,
          title: "New Sewer subscribers",
          content: "1,305",
          image:"/images/tap-inv.png"
       
        },
        {
          "id":7,
          title: "Turnover (UGX Billion)",
          content: "519 Bn",
          image:"/images/shillings.png"
       
        },
        {
           "id":8,
          title: "Profits before depreciation",
          content: "122 Bn",
          image:"/images/moneyup.png"
       
        },
        {
          "id":9,
          title: "Asset Base",
          content: "4.1 Tn",
          image:"/images/assetbase.png"
       
        },
        
      ];
    
    
  return (
    <div className='container'>
        {
            cardData.map((card)=>{
                return <UtilityCards key={card.id} data={card}/>
            })
        }
     
    </div>
  )
}

export default CardContainer
