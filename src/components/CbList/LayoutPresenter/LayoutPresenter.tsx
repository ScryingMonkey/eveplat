import React, {useEffect} from 'react';
import {DisplayField, InputField, Section} from '../_index';
import './LayoutPresenter.css';


const LayoutPresenter:React.FC<{
  layout:Section[];
  dataObject?: any;
  isInput: boolean; 
  changeHandler?: (key:string, val:any) => void
}> = ({layout, dataObject, isInput, changeHandler}) => {

  const parseCollTemplate = (numColls) => {
    if(numColls >= 0 && numColls <= 3){  // needs unit tests
        return `layout-grid-numColls${numColls}`;    
    } else {
        console.error(`"Invalid numColls value provided to LayoutPresenter: [${numColls}]`);
        return `invalid-numColls`;
    } 
  }
  useEffect(() => {
    if(!changeHandler && isInput){
        console.log("No changHandler provided to LayoutPresenter.")
    }
    console.log(`LayoutPresenter: Populating layout [${layout}].`);
    console.log(layout);
    console.log(dataObject);
    },[]);

  return (
    <div className='event-list-item-grid'>
      {layout.map((section, i) => (
        <div key={i} className={parseCollTemplate(section.numColls)}>
        {(!isInput) ? <h2>{section.title}</h2> : null }
        {section.colls.map((col,j) => (
          <div key={j} className={`col${j+1}`}>
          {col.map((row,k) => (
            <div key={k} className=''>
              {(isInput && changeHandler) ? (
                <InputField
                    key={j}
                    type={row.type}
                    label={row.label}
                    name={row.name}
                    changeHandler={changeHandler}       
                    min={(row.min)? row.min : 'none' } 
                    step={(row.step)? row.step : 'none' }
                />
              ):(
                <DisplayField 
                  label={row.label} 
                  value={dataObject[row.valueKey]} />
              )}
            </div>
          ))}
          </div>
        ))}
        </div>
      ))}
      </div>
    );
  }
  export default LayoutPresenter;