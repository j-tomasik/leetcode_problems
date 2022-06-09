class myCalendar {
	constructor() {
this.times = [];
}
book = (start, end) => {
	for(let apt of this.times) {
		const [currStart, currEnd] = apt;
		if(start >= currStart && start < currEnd) return false;
		if(end >= currStart && end <= currEnd) return false;
}

this.times.push([start, end]);
return true
}
}
