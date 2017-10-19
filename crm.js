window.onload = function() {

    var btn = document.getElementById('dial');

    var parseQueryString = function(queryString) {
        var params = {}, part;
        var parts = queryString.slice(queryString.indexOf('?') + 1).split('&');
        for(var i = 0; i < parts.length; i++) {
            part = parts[i].split('=');
            params[part[0]] = decodeURIComponent(part[1]);
        }
        return params;
    };

    var bpspatOrigin;
    var sessionId;

    var params = parseQueryString(window.location.search);
    bpspatOrigin = params['bpspatorigin'];
    sessionId = params['session_id'];

    function BPdial()
    {
      targetWindow = window.opener || window.parent;
      var request = { command: 'DIAL_NUMBER',number: "17193308659", item_id :sessionId };
      targetWindow.postMessage(JSON.stringify(request), bpspatOrigin);
    }


    btn.addEventListener('click', BPdial);
}
