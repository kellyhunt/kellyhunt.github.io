window.onload = function() {

    var btn = document.getElementById('CRM');

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

    function openCRM(e) {
        e.preventDefault();
        var win = window.open('file:///c:/ttt/3/post-message/CRM.html?bpspatorigin='+bpspatOrigin+"&session_id="+sessionId, '_blank');
        win.focus();
    }

    btn.addEventListener('click', openCRM);
}
