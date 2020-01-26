import {createContext} from 'react';
import {Section,DataObject} from './_index';

export type F = {
  changeHandler: (key:string,val:any) => void;
  setNewItem: (item:DataObject)=>void;
  saveNewItemToDb: ()=>void;
  deleteItemFromDb: (item:DataObject)=>void;
  logNewItem: () => void;
}
export type CbListContextType = {
    items:DataObject[];
    newItem:DataObject;
    blankItem:DataObject;
    layouts:{
      itemLayout:Section[];
      addItemLayout:Section[];
    },
    f:F,
  };
  
  const CbListContext = createContext<Partial<CbListContextType>>({
    items:null,
    newItem:null,
    blankItem:null,
    layouts:{
      itemLayout:null,
      addItemLayout:null,
    },
    f:null,
  });

export default CbListContext;