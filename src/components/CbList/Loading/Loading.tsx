import React from 'react';
import './Loading.css';

const Loading:React.FC<{
    label?:string;
}> = ({label}) => {
    return (
        
        <div className="cb-loading">    
            <div className="loading-label">
                {(label) ? label : 'Loading' }
            </div>
            <div className="wrapper">
                <span className="box circle farleft"></span>
                <span className="box circle left"></span>
                <span className="box circle center"></span>
                <span className="box circle right"></span>
                <span className="box circle farright"></span>
            </div>
        </div>
    );
}
export default Loading;