import React from 'react';
import styles from '../Home.module.css';

interface CarItemProps {
  car: {
    id: number;
    image: string;
    name: string;
    price: number;
  };
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />

      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default CarItem;
