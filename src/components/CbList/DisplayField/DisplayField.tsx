import React from 'react';
import './DisplayField.css';
import { cpus } from 'os';

const DisplayField:React.FC<{
    type?:string;
    label:string;
    value:string;
}> = ({type,label,value}) => {
    const noVal = "No Value";
    return (
        <div className={"display-field " + (type==='longtext')? 'textfield': null }>
            <label>{label}</label>
            <span className="value">{(value)?value:noVal} </span>
        </div>
    )
}
export default DisplayField;