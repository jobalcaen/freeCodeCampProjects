const rot13 = (str) => { // LBH QVQ VG!
	const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
	return str.split("").map((character) => {
  	
  		if (alphabet.indexOf(character) === -1 ) {
  			// return the str character if it does not exist inthe alphabet
  			return character;
  		} else {
	  		return (alphabet.indexOf(character) -13 >= 0 ) ? alphabet[alphabet.indexOf(character) - 13] : 
	  			alphabet[alphabet.length + (alphabet.indexOf(character) - 13)]
  		}
  	}).join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

