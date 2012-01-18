// ==UserScript==
// @name           autocomplete
// @namespace      autocomplete
// @description    Remove autocomplete attributes
// ==/UserScript==

var allElements, thisElement;
allElements = document.evaluate(
    '//*[@autocomplete]',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i = 0; i < allElements.snapshotLength; i++) {
    thisElement = allElements.snapshotItem(i);
    thisElement.removeAttribute('autocomplete');
}
