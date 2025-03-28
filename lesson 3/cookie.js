// let setCookie = (name, value, days) => {
// 	let expirationDate = new Date();
// 	expirationDate.setDate(expirationDate.getDate() + days);

// 	let cookieValue = encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString();
// 	document.cookie = name + "=" + cookieValue;
// };

// setCookie("username", "John Doe", 7);
// setCookie("userinfo2", "Mister", 5);
// setCookie("userinfo", "Mister2", 5);
//-----------------------------------------

let getCookie = (name) => {
	console.log("Просто куки выглядят так: ", document.cookie);

	let cookies = document.cookie.split(";");
	console.log("Сплитованые куки выглядят так: ", cookies);

	for (let cookie of cookies) {
		let [cookieName, cookieValue] = cookie.trim().split("=");

		console.log("Еще одна страшная операция с куками: ", [cookieName, cookieValue]);

		if (cookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}
	return null;
};

let username = getCookie("username");

console.log(username);

let deleteCookie = (name) => {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

deleteCookie("username");
