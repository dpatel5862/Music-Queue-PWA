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
    });
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("Text").set("some Value");  
}