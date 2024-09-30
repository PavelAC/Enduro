//loader.js

export class HtmlLoader {
    loadHtml(fetchFrom, whereToLoad, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", fetchFrom, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById(whereToLoad).innerHTML = xhr.responseText;
                    if(callback) callback();
            }
        };
        xhr.send();
    }
}

