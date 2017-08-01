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
 const name = document.getElementById('name');
 const namebutton = document.getElementById('namebutton');
 const login = document.getElementById('login');
 const spotifyHeader = document.getElementById('spotifyHeader');
 const createHeader = document.getElementById('createHeader');
 const listDIV = document.getElementById("listDIV")



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
    //signInHeader.classList.add('hide');
    //joinPartyTable.classList.remove('hide');
    //hostedPartyTable.classList.remove('hide');
    document.getElementById("intialLogin").className = "col-lg-6";
    name.classList.remove('hide');
    namebutton.classList.remove('hide');
    login.classList.remove('hide');
    spotifyHeader.classList.remove('hide');
    createHeader.classList.remove('hide');
    listDIV.classList.remove('hide');
}
else {
console.log('not logged in');
btnLogout.classList.add('hide');
    btnLogin.classList.remove('hide');
    btnSignUp.classList.remove('hide');
    txtEmail.classList.remove('hide');
    txtPassword.classList.remove('hide');
    //signInHeader.classList.remove('hide');
    //joinPartyTable.classList.add('hide');
    //hostedPartyTable.classList.add('hide');
    document.getElementById("intialLogin").className = "col-lg-12";
    name.classList.add('hide');
    namebutton.classList.add('hide');
    login.classList.add('hide');
    spotifyHeader.classList.add('hide');
    createHeader.classList.add('hide');
    listDIV.classList.add('hide');
}

});


firebase.auth().onAuthStateChanged(user => {
  if(user) {
    //window.location = 'home.html'; //After successful login, user will be redirected to home.html
        console.log(user);
        const email = user.email;
        console.log(email);
        document.getElementById("signInHeader").innerHTML = "Welcome " +email;

        firebase.database().ref('playlists').on("value", function(snapshot) {
           //console.log(snapshot.val());
           var playlists = snapshot.val();
           var keys = Object.keys(playlists);
           console.log(keys);
           for (var i=0; i < keys.length; i++){
            var k = keys[i];
            var Name = playlists[k].Name;
            var URI = playlists[k].URI;
            var SpotifyID = playlists[k].SpotifyID;
            //console.log(Name, URI);
            listDIV.appendChild(playlistsList);
            var li = document.createElement('li');
            li.setAttribute("class","list-group-item")
            //var anchor = document.createElement('a')
            li.innerText = ("Playlist Name: " + Name + "  " + "Creator: " + SpotifyID + "  ")
            var srcloc= "https://open.spotify.com/embed?uri=spotify:user:"+ SpotifyID +":playlist:"+URI
            console.log(srcloc)
            var button = document.createElement("button")
            button.innerHTML = "Join"
            li.appendChild(button)
            button.setAttribute("class","btn btn-primary btn-sm")
            button.setAttribute("id","joinButton"+i)
            playlistsList = document.getElementById('playlistsList');
            playlistsList.appendChild(li);
            //anchor.appendChild(li);
            // var ul = document.getElementById("list");
            // var li = document.createElement("li");
            // li.appendChild(document.createTextNode("Four"));
            // var button = document.createElement("button");
            // button.innerHTML = "asdasd";
            // li.appendChild(button);
            // li.setAttribute("id","element4");
            // ul.appendChild(li); alert(li.id);
           }
           for(let p=0; p < keys.length; p++){
            var h=document.getElementById("joinButton"+p)
             h.onclick=function(){
                var k = keys[p];
                var URI = playlists[k].URI;
                var SpotifyID = playlists[k].SpotifyID;
                var newurl = playlists[k].Urlforlist;
                var spotifyToken= playlists[k].SpotifyToken;
               srcloc= "https://open.spotify.com/embed?uri=spotify:user:"+ SpotifyID +":playlist:"+URI;
              //window.location='playlist_template.html';
              localStorage.setItem('SpotId',SpotifyID)
              console.log(SpotifyID)
              localStorage.setItem('URI',URI)
              console.log(URI)
              localStorage.setItem('URL',newurl)
              console.log(newurl)
              localStorage.setItem('spotifyToken',spotifyToken)
              console.log(spotifyToken)
               document.getElementById('list').src = srcloc;
               console.log(srcloc)
             }
           }
        },
        function (error) {
           console.log("Error: " + error.code);
        });
  }
  else
  {
        document.getElementById("signInHeader").innerHTML = "Sign In/Sign Up";
  }

});

}());