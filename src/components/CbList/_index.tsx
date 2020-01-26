import CbList from "./CbList";
import CbListContext from './CbListContext';
import CbListHeader from "./CbListHeader";
import CbListItem from "./CbListItem";
import InputField from "./InputField/InputField";
import DisplayField from "./DisplayField/DisplayField";
import LayoutPresenter from './LayoutPresenter/LayoutPresenter';
import FullWidthButton from './CbListButtons/FullWidthButton';
import HalfWidthButton from './CbListButtons/HalfWidthButton';
import StatusIndicator from './StatusIndicator/StatusIndicator';
import AddListItem from './AddListItem';
import Loading from './Loading/Loading';

export { 
    CbList,
    CbListContext,  
    CbListHeader, 
    CbListItem, 
    InputField, 
    DisplayField, 
    LayoutPresenter, 
    FullWidthButton, 
    HalfWidthButton, 
    StatusIndicator, 
    AddListItem,
    Loading,  
};
export interface DataObject {
    id: string;
    name:string;
    status:string;
    clone: () => DataObject;
    clear: () => void;
    setConfig: (o: { [key: string]: any }) => void;
    getObject: () => Object;
  }
  
export type Field = {
  valueKey:string;
  label:string;
  type:string;
  min?:string;
  step?:string;
}

export type DataItem = {
    label?:string;
    valueKey?:string;
    name?: string;
    type?:string;
    min?:string;
    step?:string;
  }
export type Section = {
    title:string,
    numColls: Number,
    colls: DataItem[][]
  };
export type Layout = Section[];

export enum ButtonType{
    "cancel"="CANCEL",
    "save"="SAVE",
    "func"="FUNC"
}

export const parseButtonType = (type:string) => {
    let style = '';
    switch(type){
        case ButtonType.save:
            style += 'cb-list-save-button';
            break;
        case ButtonType.cancel:
            style += 'cb-list-cancel-button';
            break;
        case ButtonType.func:
        default:
            style += 'cb-list-button';
            break;
    }
    return style;
}
