import React, { useState } from 'react'
import { options } from '../colorChanger/colorChanger';

export default function DropDown() {
    const [color, setColor] = useState('black');

    const changeColor = (event) => {
      setColor(event.target.value)
    }

  return (
    <div>
    DropDown
    <select onChange={changeColor}  style={{"backgroundColor":color, color: "white"}}>
    {options.map(data => (
        <option key={data.label} label={data.label} value={data.value}>{data.label}</option>
    ))}
    </select>
    <div style={{marginTop: "20px", width: "500px", height: "200px", "backgroundColor": color}}>
    </div>
    </div>
  )
}