import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID
};

export class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  room = roomId => this.db.ref("/rooms/" + roomId).once("value");
  rooms = () => this.db.ref("/rooms").once("value");
}
