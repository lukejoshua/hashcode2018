const fs = require('fs')

module.exports = function readFile(fileName){
	let fileString = fs.readFileSync(fileName).toString()
	let lines = fileString.split('\n')
	let [rows, columns,numVehicles,numRides,bonus, steps] = lines[0].split(' ').map(x => Number(x))
	let rides = []
	for(let [index,line] of lines.slice(1,numRides+1).entries()){
		let lineArr = line.split(' ').map((x) => Number(x))
		rides.push({
			lineNum : index,
			from: [lineArr[0], lineArr[1]],
			to: [lineArr[2], lineArr[3]],
			start : lineArr[4],
			end: lineArr[5]
		})
	}

	return {
		rows,
		columns,
		numVehicles,
		bonus,
		steps,
		rides
	}
}
