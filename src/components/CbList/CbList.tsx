import React, {useState, useEffect} from "react";
import CbListContext, {F, CbListContextType} from './CbListContext';
import {CbListItem, Section, DataObject, Loading, AddListItem} from "./_index";
import { getThemeProps } from "@material-ui/styles";
import { TicketEvent,Venue } from "../../types/_index";


const CbList: React.FunctionComponent<{
  items: DataObject[];
  noItemsLabel: string;
  itemLayout: Section[];
  blankItem: TicketEvent | Venue;
  addItemLayout: Section[];
  saveItemToDb: (item: DataObject) => void;
  deleteItemFromDb: (item: DataObject) => void;
}> = props => {

  const [newItem, setNewItem] = useState(props.blankItem.clone());
  useEffect(() => {
    console.log('> CbList.UseEffect.newItem:');
    console.log(newItem);
  },[newItem]);

  const f:F = {
    changeHandler: (key: string, val: string) => {
      console.log(`> CbList.f.changeHandler(${key}, ${val})`);
      const ni = newItem.clone();
      ni.setConfig({ [key]: val });
      setNewItem(ni);
    },
    setNewItem: (item:(TicketEvent | Venue)) => {
      console.log(`> CbList.f.setNewItem(${item}):`);
      console.log(item);
      setNewItem(item) ;
    },
    saveNewItemToDb: () => {
      console.log(`> CbList.f.saveNewItemToDb()`);
      props.saveItemToDb(newItem);
      // newItem.clear();
    },
    deleteItemFromDb: (item:(TicketEvent | Venue)) => {
      console.log(`> CbList.f.deleteItemFromDb(item)`);
      console.log(item);
      props.deleteItemFromDb(item);
    },
    logNewItem: () => {
      console.log('> CbList.f.logState():');
      console.log(newItem);
    }, 
  }

  const context:CbListContextType = { 
    items:props.items,
    newItem:newItem,
    blankItem:props.blankItem,
    layouts: {
      itemLayout:props.itemLayout,
      addItemLayout:props.addItemLayout,
    },
    f:f 
  }

  return (
    <CbListContext.Provider value ={{...context}}>
      <div className={"cb-list"}>

        {(props.items.length === 0) ? (
          <Loading label={props.noItemsLabel} />
        ):(
    
          <div>  
            {props.items.map((item: DataObject, i: number) => {
              return <CbListItem item={item} listnum={i} key={i} />;
            })}
          </div>
        )}
        
        <AddListItem buttonLabel="Add an event (+)" />

      </div>
    </CbListContext.Provider>
  );
};
export default CbList;
