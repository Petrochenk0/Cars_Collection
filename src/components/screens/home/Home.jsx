import { useEffect,useState } from 'react'
import CarItem from './car-item/CarItem.jsx'
import {cars as carsData} from './cars.data.js'
import CreateForm from './create-car-form/CreateForm.jsx'

function Home() {
const [cars, setCars] = useState(carsData)
console.log(cars)

  useEffect(()=>{

    const fetchData = async () => {
      const response = await fetch(carsData)
      const data = await response.json()
      setCars(data)
    }
    fetchData()

  },[cars])

  return (
    
    <div>
      <h1>  Cars </h1>
      
      <CreateForm setCars={setCars}/>
      
      <div>
        {cars.length ? cars.map(car=>
          <CarItem key={car.id} car={car} />) 
          : <p>Loading...</p>}
      </div>
    </div>
  )
  
}

export default Home