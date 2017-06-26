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

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

 // Add login event
 btnLogin.addEventListener('click', e => {
 	//Get Email and Pass
 	const email = txtEmail.value;
 	const pass = txtPassword.value;
 	const auth = firebase.auth();
 	//Sign In
 	const promise = auth.signInWithEmailAndPassword(email,pass);
 	promise.catch(e=> console.log(e.message));
});

 // Add signUp event
 btnSignUp.addEventListener('click', e => {
 	//Get Email and Pass
 	//TODO: Check for real email
 	const email = txtEmail.value;
 	const pass = txtPassword.value;
 	const auth = firebase.auth();
 	//Sign In
 	const promise = auth.createUserWithEmailAndPassword(email,pass);
 	promise.catch(e => console.log(e.message));
});

// Add sign out event
 btnLogout.addEventListener('click', e => {
 	firebase.auth().signOut();
  console.log('user signed out');
 });

 const joinPartyTable = document.getElementById('joinPartyTable');
 const hostedPartyTable = document.getElementById('hostedPartyTable');
const signInHeader = document.getElementById('signInHeader');


//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser){
		console.log(firebaseUser);
    //Changes to UI when user is loged in
		btnLogout.classList.remove('hide'); 
    btnLogin.classList.add('hide');
    btnSignUp.classList.add('hide');
    txtEmail.classList.add('hide');
    txtPassword.classList.add('hide');
    signInHeader.classList.add('hide');
    joinPartyTable.classList.remove('hide');
    hostedPartyTable.classList.remove('hide');
	}
	else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
    btnLogin.classList.remove('hide');
    btnSignUp.classList.remove('hide');
    txtEmail.classList.remove('hide');
    txtPassword.classList.remove('hide');
    signInHeader.classList.remove('hide');
    joinPartyTable.classList.add('hide');
    hostedPartyTable.classList.add('hide');

	}

});


firebase.auth().onAuthStateChanged(user => {
  if(user) {
    //window.location = 'home.html'; //After successful login, user will be redirected to home.html
        console.log(user);
        const email = user.email;
        console.log(email);
        document.getElementById("welcomeHeader").innerHTML = "Welcome " +email;

  }
  else
  {
        document.getElementById("welcomeHeader").innerHTML = "Welcome";
  }

});

  var database = firebase.database();
console.log(database.ref());


}());
