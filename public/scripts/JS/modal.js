  const playlistName = document.getElementById('playlistName');
  const modalSubmit = document.getElementById('modalSubmit');


  modalSubmit.addEventListener('click', e => {
 	//Get Playlist Name
 	const Name = playlistName.value;
 	console.log(Name);
 	window.location = 'playlist_template.html';
});


