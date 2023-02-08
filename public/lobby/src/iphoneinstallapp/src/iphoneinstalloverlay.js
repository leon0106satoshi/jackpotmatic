'use strict';
var iPhoneInstallOverlay = (function(document, localStorage) {
    var afterHide = undefined;
    var defaultConfig = {
        showOnReload: true,
        appIconURL: './images/logo.png',
        spritesURL: './images/mobile-sprite.png',
        blurElement: '',
        appName: '',
        addText: 'Add to Home Screen',
        previewText: "Don't show this again!",
        autoHide: 0
    }

    var isiPhoneSafari = navigator.userAgent && !navigator.userAgent.match('CriOS') && navigator.userAgent.match(/iPhone/i);

    //var isModeFullscreen = 'standalone' in window.navigator && window.navigator.standalone !== true;


    var DOM_TEMPLATE = "\
  <div class=\"add-to-home\">\
    <div class = \"text-right browser-preview f12\" ng-click=\"main.iPhoneNotFullscreen=false\">{previewText}</div>\
    <div class = \"logo-name-container\" style=\"background-image:url({appIconURL})\">\
      {appName}\
    </div>\
    <div class = \"homescreen-text\">To install tap\
      <div class = \"icon-addToHome sprite-mobile\" style=\"background-image:url({spritesURL})\"></div> and choose\
      <br /> {addText}\
    </div>\
    <div class = \"icon-homePointer sprite-mobile\"  style=\"background-image:url({spritesURL})\"></div>\
  </div>\
  ";

    function showOverlay() {
        document.querySelector(".add-to-home").style.display = 'block';
        if (defaultConfig.blurElement)
            document.querySelector(defaultConfig.blurElement).classList.add('blur');
        if (afterHide !== undefined)
            afterHide();
        if (defaultConfig.autoHide > 0)
            setTimeout(function() {
                hideOverlay();
            }, (defaultConfig.autoHide * 1000));
    }

    function hideDontShowAgain() {
        localStorage.setItem('overlayStatus1', 'hidden');
        document.querySelector(".add-to-home").style.display = 'none';
        if (defaultConfig.blurElement)
            document.querySelector(defaultConfig.blurElement).classList.remove('blur');
    }

    function hideOverlay() {
        if (!defaultConfig.showOnReload) {
            localStorage.setItem('overlayStatus1', 'hidden');
        }
        document.querySelector(".add-to-home").style.display = 'none';
        if (defaultConfig.blurElement)
            document.querySelector(defaultConfig.blurElement).classList.remove('blur');
    }

    function replaceString(obj, str) {
        var retStr = str;
        Object.keys(obj).forEach(function(key) {
            var regexPattern = '{' + key + '}';
            retStr = retStr.replace(new RegExp(regexPattern, 'g'), obj[key]);
        });
        return retStr;
    }

    function initDom(config) {
        var dom = replaceString(config, DOM_TEMPLATE);
        var wrapper = document.createElement('div');
        wrapper.innerHTML = dom;
        document.body.appendChild(wrapper);
        showOverlay(config);
    }

    function initClickEvents() {
        document.querySelector(".add-to-home .browser-preview").addEventListener("click", hideDontShowAgain);
    }

    return {
        init: function(c, a) {
            c = c || defaultConfig;

            //var config = arguments.length <= 0 || arguments[0] === undefined ? defaultConfig : arguments[0];
            //if (!config.blurElement) {
            //  console.error('Blur Element is required in config');
            //  return;
            //}
            if (a)
                afterHide = function() {
                    var xx = a;
                };

            if (localStorage.getItem('overlayStatus1') !== 'hidden') {
                initDom(Object.assign(defaultConfig, c));
                initClickEvents();
            }
        },
        hideOverlay: hideOverlay,
        showOverlay: showOverlay
    }
})(document, localStorage);