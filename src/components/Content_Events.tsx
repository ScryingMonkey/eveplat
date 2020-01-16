import React, { useContext, useState } from "react";
import firebase, { firestore } from "firebase";
import { Context, FirebaseContext, ContextConsumer } from "../contexts/_index";
import { TicketEvent } from "../types/TicketEvent";

class ContentEvents extends React.Component<
  {},
  { nameInput: string; events: TicketEvent[] },
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "Test Name",
      events: []
    };
  }

  componentDidMount() {
    this.getEventsFromFirebase();
  }

  updateInput = e => {
    this.setState({
      nameInput: e.target.value
    });
  };

  addTicketEvent = e => {
    e.preventDefault();
    let te: TicketEvent = new TicketEvent(this.state.nameInput);
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
    return firebase.firestore().collection("events");
  }
  getEventsFromFirebase() {
    let es = this.getEventsRef()
      .get()
      .then(res => {
        let docs = res.docs.map(doc => {
          let te = new TicketEvent("temp");
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
        <h1>Events</h1>

        <form onSubmit={this.addTicketEvent}>
          <input
            type="text"
            name="eventName"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.nameInput}
          />
          <input type="submit" />
        </form>

        {this.state.events.map((te: TicketEvent, i: number) => {
          return (
            <div key={i}>
              [{i}] name: {te.name} id: {te.id}
            </div>
          );
        })}
      </div>
    );
  }
}
export default ContentEvents;
