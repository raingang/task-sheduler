export function getExecutionStatus(startDate, endDate) {
	const fromStartToEnd = endDate.valueOf() - startDate.valueOf()
	const fromStartToNow = Date.now() - startDate.valueOf()
	const restTime = 100 * fromStartToNow / fromStartToEnd
	if (restTime > 100) {
		return 'overdue'
	} else if (restTime > 50) {
		return 'hot'
	} else {
		return 'in_progress'
	}
}

export function dateToString(date) {
	let month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	return date.getDate() + ' ' + month[date.getMonth()]
}