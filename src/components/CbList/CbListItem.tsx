import React, { useState, useContext } from "react";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Edit from '@material-ui/icons/Edit';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { LayoutPresenter, Section,StatusIndicator,AddListItem,HalfWidthButton,ButtonType,DataObject, CbListContext } from "./_index";
import './CbList.css';

const CbListItem: React.FunctionComponent<{
  item: DataObject;
  listnum: number;
}> = props => {
  const {newItem,layouts,f} = useContext(CbListContext);

  const [collapsed, setCollapsed] = useState(true);
  const [notEditing, setNotEditing] = useState(true);

  const saveItem = () => {
    // console.log("> CbEditListItem.addItem():[item]");
    // console.log(item);
    setCollapsed(true);
    setNotEditing(true);
    f.saveNewItemToDb();
  };
  const deleteHandler = () => {
    // console.log("> CbEditListItem.deleteItem():[item]");
    // console.log(item);
    setCollapsed(false);
    setNotEditing(false);
    f.deleteItemFromDb(props.item);
  }

  const collapseHandler = () => {
    setNotEditing(true);
    setCollapsed(!collapsed);
  }
  const editItem = () => {
    setCollapsed(true);
    setNotEditing(false);
    f.setNewItem(props.item);
  }
  

  return (
    <div className="cb-list-item w3-card-2" >

      <EventListItemHeader 
        listkey={`${props.listnum}`} 
        item={props.item} 
        collapsed={collapsed}
        collapseHandler={collapseHandler}  
        deleteHandler={deleteHandler} 
        editHandler={editItem} />

      { (collapsed) ? (
        null
      ) : (
        <LayoutPresenter layout={layouts.itemLayout} isInput={false} dataObject={props.item} />
      )}

      { (notEditing) ? (
        null 
      ) : (
        <div>
        {/* <SaveCancelButtonBar cancel={editHandler} save={saveItem} /> */}
        <LayoutPresenter layout={layouts.itemLayout} isInput={true} changeHandler={f.changeHandler} dataObject={props.item}/>
        <SaveCancelButtonBar cancel={() => setNotEditing(true)} save={saveItem} />
        </div>
      )}
      
    </div>
  );
};

const EventListItemHeader:React.FC<{
  item: DataObject;
  listkey: string;
  collapsed: boolean;
  collapseHandler: () => void;
  deleteHandler: () => void;
  editHandler: () => void;
}> = ({listkey,item,collapsed,collapseHandler,deleteHandler,editHandler}) => {
  return (
    <div className='cb-list-item-header' >
      <span className="cb-badge">{listkey}</span>
      <h1>{item.name}</h1>
      <StatusIndicator status={item.status} />
      <div className="pointer" >
        <DeleteOutlined onClick={ ()=> deleteHandler() } color="action" />
        <Edit onClick={()=> editHandler() } color="action" />
        {(collapsed) ? (
          <KeyboardArrowDown onClick={() => collapseHandler()} fontSize="large" color="action" /> 
        ):(
          <KeyboardArrowUp onClick={() => collapseHandler()} fontSize="large" color="action" /> 
        )}
      </div>
    </div>
  );
}

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


export default CbListItem;