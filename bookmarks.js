function createFolder() {
    chrome.bookmarks.create({
        title: "Coding Resources",
        url: null
    }, onBmarkAdded)
}

function onBmarkAdded(bookMark) {
    console.log("Bookmark added with id: " + bookMark.id, bookMark)
}

chrome.bookmarks.getTree(function (results) {
    console.log(results)
})

function updateIcon() {
    chrome.bookmarks.create({ parentId: bookmarkBar.id, title: 'Extension bookmarks' })
}
chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
