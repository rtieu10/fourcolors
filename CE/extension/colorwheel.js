function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('buttons');
  for (var i = 0; i < buttons.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
