const readFile = require('./readFile')
const basicSolution = require('./basic')
const justForE = require('./justForE')
const process = require('process')

const inputFiles = [
	'../input/a_example.in',
	'../input/b_should_be_easy.in',
	'../input/c_no_hurry.in',
	'../input/d_metropolis.in',
	'../input/e_high_bonus.in'
]

let problemObj = readFile(inputFiles[process.argv[2]])

console.log(justForE(problemObj))
