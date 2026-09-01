(function () {
    "use strict";

    var preferenceKey = "eurovilla_local_cookie_policy";

    function banner() {
        return document.getElementById("cookie-banner");
    }

    function hideBanner() {
        var element = banner();
        if (element) {
            element.style.display = "none";
        }
    }

    function showBanner(showAdvanced) {
        var element = banner();
        var defaultPanel = document.getElementById("cookie-banner-default");
        var advancedPanel = document.getElementById("cookie-banner-advanced");

        if (!element) {
            return;
        }

        element.style.display = "block";
        if (defaultPanel) {
            defaultPanel.style.display = showAdvanced ? "none" : "block";
        }
        if (advancedPanel) {
            advancedPanel.style.display = showAdvanced ? "block" : "none";
        }
    }

    if (localStorage.getItem(preferenceKey)) {
        hideBanner();
    }

    document.addEventListener("click", function (event) {
        var target = event.target.closest("#cookie-banner-accept-btn, #cookie-banner-save-btn, a[href='/api/cookie-settings/']");

        if (!target) {
            return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();

        if (target.matches("a[href='/api/cookie-settings/']")) {
            localStorage.removeItem(preferenceKey);
            showBanner(true);
            return;
        }

        localStorage.setItem(preferenceKey, "accepted");
        hideBanner();
    }, true);
}());
