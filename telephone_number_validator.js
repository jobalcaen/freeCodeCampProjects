const telephoneCheck = (telephoneNumber) => {

	const re = /(^1?)([\s-]?)(\d{3}|\(\d{3}\))([\s-]?)(\d{3})([\s-]?)(\d{4})\b/g

	return re.test(telephoneNumber);
}

telephoneCheck("1 555-555-5555");




// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

//coutry code - 1
//territory code - 204
//exchange code - 797
//station code - 4431