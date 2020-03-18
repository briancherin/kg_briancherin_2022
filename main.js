run()

function run() {
	
	if (process.argv.length < 4) {
		console.log("Invalid input");
	} else {
		//Get input from command line arguments
		const s1 = process.argv[2];
		const s2 = process.argv[3];
		
		console.log(mappingExists(s1, s2));
	}
}

function mappingExists(str1, str2) {
	const len1 = str1.length;
	const len2 = str2.length;
	
	//There can not be a mapping between strings of non-equal length
	if (len1 != len2) {
		return false;
	}
	
	let map = new Map();
	
	//Iterate over each pair of characters in the two strings
	for (let i = 0; i < len1; i++) {
		const c1 = str1.charAt(i);
		const c2 = str2.charAt(i);
		if (map.has(c1)) {				//If this character already has a mapping
			if (map.get(c1) !== c2) {	//If this contradicts the previous mapping
				return false;			//The mapping does not exist
			}
		} else {						//If this character does not have a mapping yet
			map.set(str1.charAt(i), str2.charAt(i));	//Save what character it maps to
		}
	}
	
	//If no error in the mapping was found, the mapping exists
	return true;
	
}