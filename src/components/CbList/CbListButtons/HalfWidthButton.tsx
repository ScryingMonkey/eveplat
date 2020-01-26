import React from 'react';
import "../CbList.css";
import {parseButtonType, ButtonType} from '../_index';

const HalfWidthButton:React.FC<{
    label: string;
    type?: ButtonType;
    className?: string;
    clickHandler: () => void;
  }> = ({label,type,className,clickHandler}) => {

    return <span className={parseButtonType(type)+" w3-card-2"+className} onClick={() => clickHandler()} >{label}</span>;
  }
  export default HalfWidthButton;