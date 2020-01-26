import React, { useState, useContext } from "react";
import { DataObject, CbListContext } from './_index';
import { 
  LayoutPresenter, 
  Section, 
  FullWidthButton, 
  HalfWidthButton, 
  ButtonType} from './_index';


const AddListItem:React.FC<{
    buttonLabel: string;
  }> = props => {
    const {blankItem,newItem,layouts,f} = useContext(CbListContext);
    
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapsed = () => {
      // console.log("> AddListItem.toggleCollapsed():[layout,item]");
      // console.log(layout);
      // console.log(item);
      f.setNewItem(blankItem);
      setCollapsed(!collapsed);
    }
    const saveItem = () => {
      // console.log("> AddListItem.addItem():[item]");
      // console.log(props.newItem);
      toggleCollapsed();
      f.saveNewItemToDb();
    };
  
    return (
      <div>
        {(collapsed) ? 
        ( 
          <div>
            <FullWidthButton 
              label={props.buttonLabel}
              type={ButtonType.func} 
              clickHandler={toggleCollapsed} 
              className="cb-list-item" />
          </div> 
        ) : ( 
          <form>
            <div className="cb-list-item w3-card-2">
              <LayoutPresenter layout={layouts.addItemLayout} isInput={true} changeHandler={f.changeHandler} dataObject={newItem} />
            </div>
            <SaveCancelButtonBar cancel={toggleCollapsed} save={saveItem} />
          </form>
        )}
      </div>
    );
  };
  export default AddListItem;
  
  const SaveCancelButtonBar:React.FC<{
    cancel: () => void;
    save: () => void;
  }> = ({cancel,save}) => {
    return (
      <div className="cb-list-item cb-list-button-bar-2">
        <HalfWidthButton label='Cancel' type={ButtonType.cancel} clickHandler={cancel} />
        <HalfWidthButton label='Save' type={ButtonType.save} clickHandler={save} />
      </div>
    );
  }