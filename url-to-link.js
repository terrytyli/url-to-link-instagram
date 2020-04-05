// ==UserScript==
// @name         Url to Link for Instagram
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Convert the url text to clickable link
// @author       Terry Li
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function urlToLink() {
    let spans = document.querySelectorAll("span");

    for (let i = 0; i < spans.length; i++) {
      let innerText = spans[i].innerText;
      let innerHTML = spans[i].innerHTML;
      if (innerText && innerText === innerHTML) {
        let withLink = innerText.replace(
          /(https?:\/\/[^ ,]*)/g,
          `<a href="$1" target="_blank" style="text-decoration:underline">$1</a>`
        );
        if (withLink !== innerText) {
          spans[i].innerHTML = withLink;
        }
      }
    }
  }
  urlToLink();
  var observer = new MutationObserver(urlToLink);
  observer.observe(document.body, { attributes: true, childList: true });
})();
