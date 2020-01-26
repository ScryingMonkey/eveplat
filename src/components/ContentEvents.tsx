import React, { useContext, Suspense } from "react";
import { AppContext } from "../contexts/_index";
import { TicketEvent } from "../types/_index";
import { CbListHeader, CbList, Loading } from "./_index";

const ContentEvents:React.FC<{}> = () => {

  const { events, eventItemLayout, addEventLayout } = useContext(AppContext).state.event;
  const { saveEventToDb,deleteEventFromDb } = useContext(AppContext).f;
 
  return (
    <div className="content">
      <CbListHeader
        title="Events"
      />
      <Suspense fallback={ <Loading /> }>

        <CbList
          items={events} 
          noItemsLabel="Add your first event."  
          itemLayout={eventItemLayout} 
          blankItem={new TicketEvent()} 
          addItemLayout={addEventLayout} 
          saveItemToDb={saveEventToDb} 
          deleteItemFromDb={deleteEventFromDb} 
        />

        {/* <div className="cb-list " >

        {(events.length === 0) ? (
          <Loading label="Add your first event." />
        ):(
          
          <div>  
            <AddListItem 
              buttonLabel="Add an event (+)" 
              addItemToStore={ saveEventToDb } 
              updateItemInState={ updateNewTe } 
              layout={addEventLayout}
              newItem= {new TicketEvent()} />
            <CbList
              items={events} 
              layout={addEventLayout} 
              saveItemToDb={saveEventToDb} 
              deleteItemFromDb={deleteEventFromDb} />

            {events.map((te: TicketEvent, i: number) => {
              return <CbListItem 
                listitem={te} 
                layout = {addEventLayout} 
                listkey={`${i}`}
                saveItemToDb={saveEventToDb} 
                deleteItemFromDb={deleteEventFromDb} 
                key={i} />;
            })}
          </div>
        )}
        
        <AddListItem 
              buttonLabel="Add an event (+)" 
              addItemToStore={ saveEventToDb } 
              updateItemInState={ updateNewTe } 
              layout={addEventLayout}
              newItem= {new TicketEvent()} />

        </div>   */}
      </Suspense>
    </div>
  );
}
export default ContentEvents;
