module.exports = function(problemSet) {
	const iterations = 30

	problemSet.rides = problemSet.rides
		// .filter(ride => ride.dist < (problemSet.rows + problemSet.columns)/1.5)
		.filter(ride => !(ride.end < ride.start+ ride.dist))
		.sort((ride1, ride2) => {
			if (ride1.start < ride2.start) return -1
			if (ride1.start > ride2.start) return 1
			return 0
		})
	let cars = problemSet.rides.slice(0, problemSet.numVehicles).map(x => ({
		trips: [x.lineNum],
		pos: x.to,
		timeNow: Math.abs(x.dist + x.distFrom(0, 0))
	}))

	problemSet.rides = problemSet.rides.slice(problemSet.numVehicles)

	for (let i = 0; i < iterations; i++) {
		cars = cars.map((car,indexOfCar) => {
			for (let [index, ride] of problemSet.rides.entries()) {
				if (
					ride.distFrom(car.pos[0], car.pos[1]) + car.timeNow <= (ride.end -ride.dist)
					&& ride.distFrom(car.pos[0], car.pos[1]) + car.timeNow + ride.dist < ride.end
				) {
					car.timeNow = ride.distFrom(car.pos[0], car.pos[1]) + car.timeNow
					car.trips.push(ride.lineNum)
					problemSet.rides = problemSet.rides.slice(0, index).concat(problemSet.rides.slice(index + 1))
					return car
				}
			}
			return car
		})
	}

	return cars.map(car => {
		let str = '' + car.trips.length
		for (let t of car.trips) str += ' ' + t
		str += '\n'
		return str
	}).join('').trim()
}
