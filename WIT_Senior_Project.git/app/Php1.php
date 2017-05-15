<?php
$html = file_get_contents('https://open.spotify.com/track/7As8h8LJTMIritB8QwSmqr'); //get the html returned from the spotify share url

$music_doc = new DOMDocument(); //creates a new document to place scraped data into

libxml_use_internal_errors(TRUE); //disable libxml errors

if(!empty($html)){ //check if any html is actually returned

	$music_doc->loadHTML($html);
	libxml_clear_errors(); //remove errors for unusable html

	$music_xpath = new DOMXPath($music_doc);//creates new DOM path to search through
	//get all the p tags from HTML doc
	$music_row = $music_xpath->query('//p');

	// store all pulled P tags and echo back
	if($music_row->length > 0){
		foreach($music_row as $row){
			echo $row->nodeValue . "<br/>";
    }
  }
}
      ?>
