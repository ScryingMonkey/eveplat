import React, { useContext, Suspense } from "react";
import { AppContext } from "../contexts/_index";
import { Venue } from "../types/_index";
import { CbListHeader, AddListItem, CbList, Loading } from "./_index";

const ContentVenues: React.FunctionComponent<{}> = () => {

  const { venues,addVenueLayout,venueItemLayout } = useContext(AppContext).state.venue;
  const { saveVenueToDb,deleteVenueFromDb,updateNewV } = useContext(AppContext).f;

  return (
    <div className="content">
      <CbListHeader
        title="Venues"
      />
      <Suspense fallback={ <Loading /> }>
        <CbList
          items={venues} 
          noItemsLabel="Add your first venue."  
          itemLayout={venueItemLayout} 
          blankItem={new Venue()} 
          addItemLayout={addVenueLayout} 
          saveItemToDb={saveVenueToDb} 
          deleteItemFromDb={deleteVenueFromDb} 
        />
        {/* <div className="cb-list " >    

          { (venues.length === 0) ? (
            <Loading label="Add your first venue." />
          ):(
            <div>

              <AddListItem 
                buttonLabel = "Add a venue (+)" 
                addItemToStore={ saveVenueToDb } 
                updateItemInState={ updateNewV } 
                layout={addVenueLayout}
                newItem= {new Venue()} />

            <CbList
              items={venues} 
              layout={addVenueLayout} 
              saveItemToDb={saveVenueToDb} 
              deleteItemFromDb={deleteVenueFromDb} />

              {venues.map((te: Venue, i: number) => {
                return <CbListItem 
                  listitem={te} 
                  listkey={`${i}`} 
                  layout={addVenueLayout} 
                  saveItemToDb={saveVenueToDb} 
                  deleteItemFromDb={deleteVenueFromDb} 
                  updateItemInStore={updateNewV}
                  />;
              })}

            </div>
          )}

          <AddListItem 
            buttonLabel= "Add a venue (+)" 
            addItemToStore={ saveVenueToDb } 
            updateItemInState={ updateNewV } 
            layout={addVenueLayout}
            newItem= {new Venue()} />
    
        </div>       */}

      </Suspense>
    </div>
  );

};
export default ContentVenues;
