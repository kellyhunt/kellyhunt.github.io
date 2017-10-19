window.onload = function() {

    var btn = document.getElementById('dial');

    function BPdial()
    {
      targetWindow = window.opener || window.parent;
      var request = { command: 'DIAL_NUMBER',number: "17193308659" };
      targetWindow.postMessage(JSON.stringify(request),'*');
    }


    btn.addEventListener('click', BPdial);
}
