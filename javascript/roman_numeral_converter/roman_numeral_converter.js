const convertToRoman = (num) => {

	let convertedNumeral = "";

	const numeralsTable = [
		[1000,"M"],
		[900,"CM"],
		[500,"D"],
		[400,"CD"],
		[100,"C"],
		[90,"XC"],
		[50,"L"],
		[40,"XL"],
		[10,"X"],
		[9,"IX"],
		[5,"V"],
		[4,"IV"],
		[1,"I"]
	]

	numeralsTable.forEach((numeral) => {
		while (num >= numeral[0]) {
			convertedNumeral += numeral[1];
			num -= numeral[0];
		}
	})

	return convertedNumeral;


}

console.log(convertToRoman(36));