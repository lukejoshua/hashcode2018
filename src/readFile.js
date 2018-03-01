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
			end: lineArr[5],
			get dist(){
				return  Math.abs(this.from[0] - this.to[0]) + Math.abs(this.from[1] - this.to[1])
			},
			distFrom(x,y){
				return  Math.abs(this.from[0] - x) + Math.abs(this.from[1] - y)
			}
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
