// ==UserScript==
// @name         Twitch Amazon Prime Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes amazon prime ad on Twitch.tv
// @author       mirbyte (https://github.com/mirbyte)
// @match        https://www.twitch.tv/
// @icon         https://banner2.cleanpng.com/20180513/xie/kisspng-twitch-computer-icons-logo-5af8037d689af0.0981376915262032614285.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function removePrime() {
        var primeOffersDiv = document.querySelector('.Layout-sc-1xcs6mc-0.cwtKyw.prime-offers');
        if (primeOffersDiv) {
            primeOffersDiv.remove();
        }
    }
    document.addEventListener('DOMContentLoaded', removePrime);
    // watch for changes in the DOM
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            removePrime();
        });
    });
    observer.observe(document.body, { subtree: true, childList: true });
})();
