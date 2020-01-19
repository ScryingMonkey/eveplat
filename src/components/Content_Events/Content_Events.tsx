import React, { useContext, Suspense } from "react";
import { firestore } from "firebase";
import { AppContext, FirebaseContext } from "../../contexts/_index";
import { TicketEvent } from "../../types/TicketEvent";
import { AddTicketEvent, CbListHeader, EventsList } from "../_index";

class ContentEvents extends React.Component<
  {},
  { nameInput: string; events: TicketEvent[]; showAddEvents: Boolean },
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "Test Name",
      events: [],
      showAddEvents: false
    };
  }

  componentDidMount() {
    this.getEventsFromFirebase();
  }
  updateInput = e => {
    this.setState({ nameInput: e.target.value });
  };
  toggleAddEvent = () => {
    this.setState({ showAddEvents: !this.state.showAddEvents });
    console.log(`showAddEvents:${this.state.showAddEvents}`);
  };
  addTicketEvent = e => {
    e.preventDefault();
    let te: TicketEvent = new TicketEvent();
    te.setConfig({ name: this.state.nameInput });
    this.setState({
      nameInput: ""
    });
    let db = this.getEventsRef()
      .doc(te.id)
      .set(te.getObject())
      .then(res => this.getEventsFromFirebase());

    this.setState(prevState => ({
      events: [...prevState.events, te]
    }));
  };
  getEventsRef() {
    return firestore().collection("events");
  }
  getEventsFromFirebase() {
    let es = this.getEventsRef()
      .get()
      .then(res => {
        let docs = res.docs.map(doc => {
          let te = new TicketEvent();
          te.setConfig(doc.data());
          return te;
        });
        console.log(`docs:${docs}`);
        console.log(docs);
        this.setState(prevState => ({
          events: docs
        }));
      });
  }
  // componentDidMount(){
  //   const eo = firebase.firestore().collection('events').get()
  //   .then( res => {
  //     console.log(`res:${res}`);
  //     this.setState(() => {
  //     })
  //   })
  // }

  // { context, funcs, style, stateFuncs } = useContext(Context);
  // fb = useContext(FirebaseContext);
  // const [input, setInput] = useState("name goes here...");
  // const [events, setEvents] = useState([]);

  // const updateInput = e => {
  //   setInput(e.target.value);
  // };

  // const addEvent = (name: string) => {
  //   let teo = new TicketEvent(name).getObject();
  //   fb.addDoc("events", teo["id"], teo);
  // };

  render() {
    return (
      <div className="content">
        <CbListHeader
          toggleLabel="Add Event (+)"
          untoggleLabel="Save"
          toggleHandler={this.toggleAddEvent}
        />
        {this.state.showAddEvents ? (
          <AddTicketEvent />
        ) : (
          <Suspense fallback={<div>"Loading..."</div>}>
            <EventsList events={this.state.events} className="" />
          </Suspense>
        )}
      </div>
    );
  }
}
export default ContentEvents;
