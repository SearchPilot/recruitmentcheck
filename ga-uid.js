// with thanks to: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
// note that this function returns a different UID on each call so need to use the same call to set all instances in the page - GA and internal tracking
distilledGenerateUid = function() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
	}).toUpperCase();
}

distilledSaveUid = function(ga, uid) {
	try {
		ga.push(['_setCustomVar',
				1,		// This custom var is set to slot #1.  Required parameter.
				'UID',		// The name of the custom variable.  Required parameter.
				uid,		// The value of the custom variable.  Required parameter.
				1		// Sets the scope to session-level.  Optional parameter.
		]); 
	} catch (err) {} //ensure that if anything goes wrong, we don't break the rest of the tracking code
}

// With thanks to http://www.quirksmode.org/js/cookies.html
function distilledSetUid(ga) {
        var cookiename = "__utmv";
	var contents = "";
        var cookies = document.cookie.split(';');
	var uidregexp = /.*UID=([^=]*)=.*/; //selects the UID variable from the cookie string (everything between "=")
        for (var i=0;i<cookies.length;i++){
                while (cookies[i].charAt(0)==' ') cookies[i] = cookies[i].substring(1,cookies[i].length);
                if (cookies[i].indexOf(cookiename+'=') == 0){
			contents = cookies[i].replace(uidregexp, "$1");
                }
        }
	if (contents != "") {
		return contents;
	} else {
		//generate and save uid
		var uid = distilledGenerateUid();
		distilledSaveUid(ga, uid);
		return uid;
	}
}
