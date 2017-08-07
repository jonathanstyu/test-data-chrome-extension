chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  var iframe = document.createElement('iframe');
  iframe.name = "customScraperiFrame";
  iframe.style.background = "grey";
  iframe.style.height = "100%";
  iframe.style.width = "0px";
  iframe.style.position = "fixed";
  iframe.style.top = "0px";
  iframe.style.right = "0px";
  iframe.style.zIndex = "9000000000000000000";
  iframe.frameBorder = "none";
  iframe.src = chrome.extension.getURL("page.html")

  document.body.appendChild(iframe);

  document.addEventListener('mouseover', function (e) {
    // console.log(e.target.nodeName + " " + e.target.className);
    console.log(iframe);
    // var outline = iframe.src.getElementById('CSSinput');
    // outline.value = e.target.className;
  })


  if (message == "show"){
    // show();
    iframe.style.width= "400px";
  }

  if (message == "close") {
    var frames = document.getElementsByName('customScraperiFrame')
    for (var i = 0; i < frames.length; i++) {
      frames[i].parentElement.removeChild(frames[i])
    }
  }

})

function show(){
  iframe.style.width= "400px";
  // if (!showing) {
  //
  //   showing = !showing;
  // }
}

function close() {
  // if (showing) {
    iframe.style.width = "0px";
    // showing = !showing;
  // }
}
