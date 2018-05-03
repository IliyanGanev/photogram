import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDGWIFnmUxWfKBOwUP-v_yUszFIVFzkx_Y",
    authDomain: "photogram-18382.firebaseapp.com",
    databaseURL: "https://photogram-18382.firebaseio.com",
    projectId: "photogram-18382",
    storageBucket: "photogram-18382.appspot.com",
    messagingSenderId: "422001783845"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}