import styles from './CreateForm.module.css'
import { useState } from 'react'

const clearData = {
    name: '',
    price: '',
    image: ''
}

const CreateForm = ({setCars}) =>{

    const [data, setData] = useState(clearData)
    

    const createCar = e => {
        e.preventDefault()
        setCars(prev=>[{
            id:prev.length + 1 ,
            ...data
        }
        ,...prev
        ])
        setData(clearData)
    }

    
     return(
        <form className={styles.form}>
            <input 
            placeholder="name" 
            onChange={e => setData(prev=>({
                ...prev,
                name: e.target.value
            }))}
            value={data.name}/>
            <input placeholder="price"
            onChange={e=>setData(prev=>({
                ...prev,
                price: e.target.value
            }))}
            value={data.price} />
            <input placeholder="img"
            onChange={e=>setData(prev=>({
                ...prev,
                image: e.target.value
            }))}
            value={data.image}/>

            <button className='btn' onClick={e=>createCar(e)}>Create</button>
        </form>
     ) 

}

export default CreateForm