window.onload = function() {

    var btn = document.getElementById('terminate');

    function BPterminate()
    {
      targetWindow = window.opener || window.parent;
      var request = { command: 'terminateInteraction'};
      targetWindow.postMessage(JSON.stringify(request),'*');
    }


    btn.addEventListener('click', BPterminate);
}
