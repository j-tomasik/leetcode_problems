import React, {useEffect, useState} from 'react';
import axios from "axios";

const CityDisplay = () => {
  const [cities, setCities] = useState('');
  const [currCity, setCurrCity] = useState('');
  const [restaurants, setRestaurants] = useState('');
  
  useEffect (() => {
    
      axios.get("https://Interview-Server.ryanntrce.repl.co/cities")
        .then(res => setCities(res.data));
    
  }, [])


  useEffect (() => {

    if(currCity !== '') {
      axios.get(`https://Interview-Server.ryanntrce.repl.co/restaurants/${currCity}`)
      .then(res => setRestaurants(res.data))
    }
  }, [currCity])
  

  
  if(cities !== undefined) {

  const cityList = [];
      
    for(let i=0; i < cities.length; i++) {
      let city = cities[i];
      const addClick = () => {
        setCurrCity(city)
      }
      let temp = <p className="city-items" key={i} onClick={addClick}>{city}</p>;
      cityList.push(temp);
    }

    const restaurantList = [];
  if(currCity !== undefined) {

    for(let i=0; i < restaurants.length; i++) {
      let restaurant = restaurants[i];
      let temp = <p className="res-items" key={i}>{restaurant}</p>;
      restaurantList.push(temp);
    }
    
  }
    


      return (
      <section className='cities-section'>
        <header style= {{display: "flex"}}>
          <h2 style= {{marginRight: 150}}>Cities</h2>
          <h2>Restaurants</h2>
          
        </header>

        <div style= {{display: "flex"}}>
          <article className="cities-list" style={{marginRight: 40}}>{cityList}</article>
          <article className="restaurants-list">{restaurantList}</article>
        </div>
        
      
      </section>
    )
  } else {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  
  
}

export default CityDisplay