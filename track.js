function registerDomain() {
	var domain = document.getElementById("domain").value;
// 	window.open("http://localhost:8080/register?name=" + domain);
// 	var request = "http://localhost:8080/register?name=" + domain + "&output=json&callback=registrationResult";
	var req = new XMLHttpRequest();
	req.open("GET", "http://localhost:8080/register?name=" + domain, true);
	req.send(null);
	alert(domain + ' Registered');
	
}	

function track(domain, trackField) {
	var req = new XMLHttpRequest();
	req.open("GET", "http://localhost:8080/trackHits?domain=" + domain + "&trackField=" + trackField);
	req.send(null);
	
}

function registrationResult() {
	alert('Result Received');
}