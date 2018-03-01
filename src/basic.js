<<<<<<< HEAD
module.exports = function(problemSet) {
=======
module.exports = function basicSolution(problemSet) {
>>>>>>> 919afd8f3ce233e4ef1eec6c35cd0695c2000aab
	const iterations = 100

	problemSet.rides = problemSet.rides
		.sort((ride1, ride2) => {
			if (ride1.dist > ride2.dist) return -1
			if (ride1.dist < ride2.dist) return 1
			return 0
		})

	let cars = problemSet.rides.slice(0, problemSet.numVehicles).map(x => ({
		trips: [x.lineNum],
		pos: x.to,
		timeNow: Math.abs(x.dist + x.distFrom(0, 0))
	}))

	problemSet.rides = problemSet.rides.slice(problemSet.numVehicles)

	let r = 0
	for (let i = 0; i < iterations; i++) {
		cars = cars.map(car => {
			for (let [index, ride] of problemSet.rides.entries()) {
				r++;
				if (ride.distFrom(car.pos[0], car.pos[1]) + car.timeNow <= problemSet.steps) {
					car.timeNow = ride.distFrom(car.pos[0], car.pos[1]) + car.timeNow
					car.trips.push(ride.lineNum)
					problemSet.rides = problemSet.rides.slice(0, index).concat(problemSet.rides.slice(index + 1))
					return car
				}
			}
			return car
		})
	}

	console.log(r)
	return ""
	return cars.map(car => {
		let str = '' + car.trips.length
		for (let t of car.trips) str += ' ' + t
		str += '\n'
		return str
	}).join('').trim()
}
