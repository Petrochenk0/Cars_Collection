import React, { useState } from 'react';
import styles from './CreateForm.module.css';

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CreateFormProps {
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
}

const clearData = {
  name: '',
  price: '',
  image: '',
};

const CreateForm: React.FC<CreateFormProps> = ({ setCars }) => {
  const [data, setData] = useState<Car>(clearData);

  const createCar = (e: React.FormEvent) => {
    e.preventDefault();
    setCars((prev) => [
      {
        id: prev.length + 1,
        ...data,
      },
      ...prev,
    ]);
    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="name"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        value={data.name}
      />
      <input
        placeholder="price"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        value={data.price}
      />
      <input
        placeholder="img"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            image: e.target.value,
          }))
        }
        value={data.image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateForm;
