import React from 'react'
import { useState } from 'react'
import { FaTrashRestore } from "react-icons/fa";

const List = () => {

    const [items,setItems]=useState(
        [
            { id:1,
              checked:true,
              item:"Play football"
            },
            { id:1,
                checked:true,
                item:"Practice React"
            },
            { id:1,
                checked:true,
                item:"Complete homeworks"
            }
        ]);
  return (
    <main>
        <ul>
            {items.map((item) => (
                <li>
                    <input
                        type='checkbox'
                        checked = {item.checked}
                    />
                    <label>{item.item}</label>
                    <button><FaTrashRestore /></button>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default List