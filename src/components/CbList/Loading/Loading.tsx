import React from 'react';
import './Loading.css';

const Loading:React.FC<{
    label?:string;
}> = ({label}) => {
    return (
        <div className="cb-loading">
            {(label) ? label : 'Loading...' }
        </div>
    );
}
export default Loading;