var firebase = require(‘firebase’);

firebase.initializeApp({
 appName: "Music Queue",
 serviceAccount: "/service-account.json",
 authDomain: "musicqueue-pwa.firebaseapp.com",
 databaseURL: "https://musicqueue-pwa.firebaseio.com",
 storageBucket: "musicqueue-pwa.appspot.com"
 apiKey: "AIzaSyDuYE2a2Wh6yIb6aXplGS2INdjohnphOKE",
});

var ref = firebase.app().database().ref();
ref.once(‘value’)
 .then(function (snap) {
 console.log(‘snap.val()’, snap.val());
 });