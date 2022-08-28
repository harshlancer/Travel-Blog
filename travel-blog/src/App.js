import React from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import data from "./data"

export default function App() {
  const card=data.map(item=>{
    return(
      <Cards
        title={item.title}
        location={item.location}
        url={item.googleMapsUrl}
        start={item.startDate}
        end={item.endDate}
        description={item.description}
        image={item.imageUrl}
      />
    )
  })

  return (  
    <>
      <Navbar />
      {card}
      
    </>
  );
}
