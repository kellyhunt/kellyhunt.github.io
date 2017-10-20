window.onload = function() {

    var btn = document.getElementById('dial');

    function BPdial()
    {
      targetWindow = window.opener || window.parent;
      var request = { command: 'DIAL_NUMBER',number: "9,,17193308659" };
      targetWindow.postMessage(JSON.stringify(request),'*');
    }

    var onWindowMessage = function(data) {
      try {
        var parse = JSON.parse(data.data);
        if(!!parse) {
          if (parse.command == 'COMPLETE_INTERACTION')
            alert(data.data);
        }
      } catch(e) {
      }
    }

    btn.addEventListener('click', BPdial);

    if (window.attachEvent) {
      window.attachEvent('onmessage', onWindowMessage);
    } else {
      window.addEventListener('message', onWindowMessage, false);
    }
}
