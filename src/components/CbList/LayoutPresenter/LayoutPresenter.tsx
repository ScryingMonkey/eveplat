import React, {useEffect} from 'react';
import {DisplayField, InputField, Section, DataItem} from '../_index';
import {DataObject} from '../_index';
import './LayoutPresenter.css';


const LayoutPresenter:React.FC<{
  layout: Section[];
  dataObject: DataObject;
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
    // console.log(`LayoutPresenter: Populating layout [${layout}].`);
    // console.log(layout);
    // console.log(dataObject);
    },[]);

  return (
    <div className='layout-wrapper'>
      {layout.map( (section:Section,i) => (
        <div key={i} id={`section${i}`} className={parseCollTemplate(section.numColls)}>
        {(!isInput) ? <h2>{section.title}</h2> : null }

        {section.colls.map( (col:DataItem[],j) => (
          <div key={j} id={`col${j}`} className={`col${j+1}`}>

          {col.map( (row:DataItem,k) => (
            <div key={k} id={`row${k}`} className=''>
              {(isInput && changeHandler) ? (
                <InputField 
                  key={k} 
                  name={row.valueKey} 
                  label={row.label} 
                  value={dataObject[row.valueKey]}
                  valueKey={row.valueKey}
                  type={ row.type }  
                  min={(row.min)? row.min : 'none' } 
                  step={(row.step)? row.step : 'none' } 
                  changeHandler={changeHandler} 
                />
              ):(
                <DisplayField 
                  label={row.label} 
                  type={row.type}
                  value={dataObject[row.valueKey]}
                  valueKey={row.valueKey} />
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