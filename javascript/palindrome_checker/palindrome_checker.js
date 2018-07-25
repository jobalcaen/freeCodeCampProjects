// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes. You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

const palindrome = (str) => {
  // Good luck!

  const cleanStr = str.
    	toLowerCase().
  		replace(/[^a-z0-9]+/g,"");

  for (let i = 0; i < cleanStr.length; i++) {
  	if ( cleanStr[i] !=  cleanStr[(cleanStr.length - 1 ) - i]) {
  		return false
  	}
  }

  return true;
}



console.log(palindrome("A man, a plan, a canal. Panama"));