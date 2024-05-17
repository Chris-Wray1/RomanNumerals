async function submitForm(url, method, formData, auth = {}) {

	if (method === 'GET' || method === 'get') {
		var params = {};
		// Display the key/value pairs
		for (const pair of formData.entries()) {
			params[pair[0]] = pair[1];
		}
		url = url + formatParams(params);
	}

	return new Promise(function (result) {
		var request = new XMLHttpRequest();
		request.open(method, url, true);

		if (typeof auth.username !== 'undefined' && typeof auth.password !== 'undefined') {
			request.setRequestHeader("Authorization", "Basic " + btoa(auth.username + ":" + auth.password));
		}

		if (typeof auth.token !== 'undefined') {
			request.setRequestHeader('Authorization', 'Bearer ' + auth.token);
		}

		request.onload = function () {
			var responseObj = JSON.parse(request.responseText);
			result({
				readyState: request.readyState,
				status: request.status,
				response: responseObj,
			});
		};

		request.onerror = function () {
			var responseObj = JSON.parse('{"error": "Internet Connection Error"}');
			result({
				readyState: request.readyState,
				status: request.status,
				response: responseObj,
			});
		};

		request.ontimeout = function () {
			var responseObj = JSON.parse('{"error": "Connection Timed Out"}');
			result({
				readyState: request.readyState,
				status: request.status,
				response: responseObj,
			});
		};

		if (method === 'GET' || method === 'get') {
			request.send();
		}

		if (method === 'POST' || method === 'post') {
			request.send(formData);
		}
	});
}

function formatParams( params ){
	return get_params = "?" + Object
		.keys(params)
		.map(function(key){
			return key+"="+encodeURIComponent(params[key])
		})
		.join("&")
}
