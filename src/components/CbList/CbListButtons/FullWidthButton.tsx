import React from 'react';
import "../CbList.css";
import {parseButtonType, ButtonType} from '../_index';

const FullWidthButton:React.FC<{
    label:string;
    type?: ButtonType;
    className?: string;
    clickHandler: () => void;
  }> = ({label,type,className,clickHandler}) => {

    return (
      <div onClick={() => clickHandler()} className={parseButtonType(type)+" "+className+" w3-card-2"}>
        <span>{label}</span>
      </div>
    )
  }
  export default FullWidthButton;