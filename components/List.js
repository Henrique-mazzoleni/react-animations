import { useState } from 'react';
import styles from '../styles/List.module.css';

export default function List () {
    const [list, setList] = useState([1,2,3])
    const [count, setCount] = useState(4)

    const addItemHandler = () => {
        setList(state => [...state, count])
        setCount(state => state += 1)
    }

    const removeItemHandler = (event) => {
        const item = +event.target.innerText
        const idx = list.findIndex(listItem => listItem === item)
        setList(state => [...state.slice(0,idx),...state.slice(idx+1)])
    }

    return <div className={styles.list}>
        <h3>Animating Lists</h3>
        <button onClick={addItemHandler}>Add Item</button>
        <p>click item to remove</p>
        <ul>{list.map(
            item => <li key={item} onClick={removeItemHandler} >{item}</li>
        )}</ul>
    </div>
}