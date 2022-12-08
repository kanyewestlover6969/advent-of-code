const { readFileSync } = require('fs');
	
function getFileData(filename) {
	const fileContent = readFileSync(filename, "UTF-8");
	
	return fileContent;
}

function getMostCalories(arr) {
	let mostCaloriesTemp = 0;
	let mostCalories = 0;

	for(let i = 0; i < arr.length; i++) {
		if(arr[i]) {
			mostCaloriesTemp += Number(arr[i]);
		} else {
			if(mostCaloriesTemp > mostCalories) {
				mostCalories = mostCaloriesTemp;
				mostCaloriesTemp = 0;
			} else{
				mostCaloriesTemp = 0;
			}
		}
	}
	return mostCalories;
}

const fileContent = getFileData("input.txt");

const arrOfNums = fileContent.split("\n");
const mostCalories = getMostCalories(arrOfNums);

console.log(mostCalories);


