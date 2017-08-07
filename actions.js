// Actions JS for using to scrape

function displayStatus(statusValue) {
  document.getElementById('statusDisplay').innerHTML = statusValue;
}

document.getElementById('scrapeButton').addEventListener("click", function () {
  var cssSelector = document.getElementById("CSSinput").value;

  displayStatus(cssSelector);
})

var closeButton = document.getElementById('closeButton');
closeButton.addEventListener("click", function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, "close");
  })
})
