function updateClock() {
	const now = new Date()
	
	const hour = String(now.getHours()).padStart(2,"0")
	const minutes = String(now.getMinutes()).padStart(2,"0")
	const seconds = String(now.getSeconds()).padStart(2,"0")

	const timeString = `${hour}: ${minutes}: ${seconds}`
	document.getElementById('clock').innerHTML = timeString
}

setInterval(updateClock,1000)