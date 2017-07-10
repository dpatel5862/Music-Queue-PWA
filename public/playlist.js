var globalid;
var playid;
var meid;
var trackname;
var access_token=localStorage.getItem('accesstoken');
var trackj={"id":'id'};
var spotifyApi = new SpotifyWebApi();
spotifyApi.searchTracks(trackname,{limit: 5}).then(function(data) {
console.log('Found', data);
trackj=data;
}, function(err) {
console.error(err);
});
globalid=localStorage.getItem('globalid');
console.log(globalid);
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(access_token)
var getmedata={
 url:'https://api.spotify.com/v1/me'
}
spotifyApi.getMe(getmedata).then(function(data) {
 console.log('me', data);
 console.log('userid', data["id"]);
 getmedata=data;
 console.log(getmedata);
  meid=getmedata["id"];
 console.log(meid);
 localStorage.setItem('meid',meid);
});
var jsonData = {
 "name":globalid ,
 "public": true}
 myid=localStorage.getItem('meid');
 console.log(myid);
spotifyApi.createPlaylist(myid,jsonData)
.then(function(data) {
console.log('Playlist Created', data);
console.log('playlistid', data["id"]);
jsonData=data;
console.log(jsonData);
 playid=jsonData["id"];
console.log(playid);
document.getElementById('list').src = "https://open.spotify.com/embed?uri=spotify:user:"+myid+":playlist:"+playid;
}, function(err) {
console.error(err);
});
spotifyApi.getUserPlaylists()  // note that we don't pass a user id
.then(function(data) {
  console.log('User playlists', data);
}, function(err) {
  console.error(err);
});
