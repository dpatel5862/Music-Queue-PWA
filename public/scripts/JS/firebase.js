// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDuYE2a2Wh6yIb6aXplGS2INdjohnphOKE",
    authDomain: "musicqueue-pwa.firebaseapp.com",
    databaseURL: "https://musicqueue-pwa.firebaseio.com",
    projectId: "musicqueue-pwa",
    storageBucket: "musicqueue-pwa.appspot.com",
    messagingSenderId: "273391193125"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
  var database = firebase.database();