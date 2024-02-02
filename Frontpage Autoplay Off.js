// ==UserScript==
// @name         Twitch Frontpage Autoplay Off
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Pauses Twitch.tv frontpage carousel video that autoplays recommended streams.
// @author       mirbyte (https://github.com/mirbyte)
// @match        https://www.twitch.tv/
// @icon         https://banner2.cleanpng.com/20180513/xie/kisspng-twitch-computer-icons-logo-5af8037d689af0.0981376915262032614285.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fuckoffautoplay() {
        var videoElement = document.querySelector('.Layout-sc-1xcs6mc-0.hTjsXl.front-page-carousel video');
        if (videoElement) {
            videoElement.pause();
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        fuckoffautoplay();
    });
    // watch for changes in the DOM
    var observerFuckOffAutoplay = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            fuckoffautoplay();
        });
    });
    observerFuckOffAutoplay.observe(document.body, { subtree: true, childList: true });
})();
