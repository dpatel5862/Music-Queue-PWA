(function() {
// Initialize Firebase
  const config = {
    apiKey: "AIzaSyCA57_kMWdNztR5nRXoqRu2dTFeSj7Oyzg",
    authDomain: "musicqueue-pwa.firebaseapp.com",
    databaseURL: "https://musicqueue-pwa.firebaseio.com",
    projectId: "musicqueue-pwa",
    storageBucket: "musicqueue-pwa.appspot.com",
    messagingSenderId: "273391193125"
  };
  firebase.initializeApp(config);

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

}());

