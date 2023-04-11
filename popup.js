document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL using chrome.tabs API
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentPageUrl = tabs[0].url;

        // Update the iframe's src attribute with the current page URL
        var iframe = document.getElementById('response-container');
        iframe.src = 'https://affiliateworthy.com/extension.php?pageurl=' + encodeURIComponent(currentPageUrl);
    });
});
