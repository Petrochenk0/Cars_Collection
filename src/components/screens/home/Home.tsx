import React, { useEffect, useState } from 'react';
import CarItem from './car-item/CarItem';
import { cars as carsData } from './cars.data';
import CreateForm from './create-car-form/CreateForm';

interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
}

function Home() {
  const [cars, setCars] = useState<Car[]>(carsData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(carsData); // Assuming carsData is a URL
      const data = await response.json();
      setCars(data);
    };
    fetchData();
  }, [cars]);

  return (
    <div>
      <h1>Cars</h1>

      <CreateForm setCars={setCars} />

      <div>
        {cars.length ? cars.map((car) => <CarItem key={car.id} car={car} />) : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Home;
