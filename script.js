function isBlockingInProgress(tabId, url) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.get(tabId, function (tab) {
        if (tab && tab.status == "loading") {
          var host = new URL(url).hostname;
          if (host.indexOf("securly.com") != -1 || host.indexOf("iheobagjkfklnlikgihanlhcddjoihkg") != -1) {
            return void resolve(true);
          }
          if (tab.pendingUrl !== undefined && ((host = new URL(tab.pendingUrl).hostname).indexOf("securly.com") != -1 || host.indexOf("iheobagjkfklnlikgihanlhcddjoihkg") != -1)) {
            return void resolve(true);
          }
        }
        resolve(false);
      });
    });
  }

function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("colorFlipper").style.backgroundColor = color;
}