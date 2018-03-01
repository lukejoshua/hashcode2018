const readFile = require('./readFile')
const Car = require('./Car')

const inputFiles = [
	'../input/a_example.in',
	'../input/b_should_be_easy.in',
	'../input/c_no_hurry.in',
	'../input/d_metropolis.in',
	'../input/e_high_bonus.in'
]


let problemObj = readFile(inputFiles[4])

function basicSolution(problemSet){
	problemSet.rides = problemSet.rides
		.sort((ride1,ride2) => {
			let dist = (ride) => Math.abs(ride.from[0] - ride.to[0]) + Math.abs(ride.from[1] - ride.to[1])
			if(dist(ride1) > dist(ride2)) return -1
			if(dist(ride1) < dist(ride2)) return 1
			return 0
		})
	let output = problemSet.rides.slice(0,problemSet.numVehicles).map(x => x.lineNum)
	output.unshift('')
	return output.join('\n1 ').slice(1)
}

console.log(basicSolution(problemObj))
