function buildIOSMeta() {
    var aMetaTags = [{
        name: "viewport",
        content: 'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
    }, {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
    }, {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
    }];
    for (var i = 0; i < aMetaTags.length; i++) {
        var oNewMeta = document.createElement('meta');
        oNewMeta.name = aMetaTags[i].name;
        oNewMeta.content = aMetaTags[i].content;
        var oOldMeta = window.document.head.querySelector('meta[name="' + oNewMeta.name + '"]');
        if (oOldMeta) {
            oOldMeta.parentNode.removeChild(oOldMeta);
        }
        window.document.head.appendChild(oNewMeta);
    }
};

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se");
};

function buildIOSFullscreenPanel() {
    var html = '';
    html += '<div class="xxx-ios-fullscreen-message">';
    html += '<div class="xxx-ios-fullscreen-swipe">';
    html += '</div>';
    html += '</div>';
    html += '<div class="xxx-ios-fullscreen-scroll">';
    html += '</div>';
    jQuery("body").append(html);
};

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block");
};

function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if (platform.product === "iPhone") {
        switch (window.devicePixelRatio) {
            case 2:
                {
                    switch (window.innerWidth) {
                        case 568:
                            {
                                if (window.innerHeight === 320) {} else {
                                    jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                                }
                            }
                            break;
                        case 667:
                            {
                                if (window.innerHeight === 375) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        case 808:
                            {
                                if (window.innerHeight === 414) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        default:
                            {
                                hideIOSFullscreenPanel();
                            }
                    }
                }
                break;
            case 3:
                {
                    switch (window.innerWidth) {
                        case 736:
                            {
                                if (window.innerHeight === 414) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        case 724:
                            {
                                if (window.innerHeight === 375) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        case 808:
                            {
                                if (window.innerHeight === 414) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        default:
                            {
                                hideIOSFullscreenPanel();
                            }
                    }
                }
                break;
            default:
                {
                    hideIOSFullscreenPanel();
                }
        }
    }
};

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize();
    }, 500);
};

function iosInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
$(document).ready(function() {
    if (platform && platform.product === "iPhone" && platform.name.toLowerCase() !== "safari") {
        buildIOSFullscreenPanel();
        buildIOSMeta();
    }
});
jQuery(window).resize(function() {
    if (platform && platform.product === "iPhone" && platform.name.toLowerCase() !== "safari") {
        iosResize();
    }
});