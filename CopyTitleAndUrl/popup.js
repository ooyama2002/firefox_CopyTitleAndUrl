document.addEventListener("click", (e) => {
    try {
        if (e.target.tagName.toLowerCase() == "div") {
            browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
                let buff = "";
                if (e.target.id == "normal") {
                    buff = tabs[0].title + "\r\n" + tabs[0].url;
                } else if (e.target.id == "markdown") {
                    buff = "[" + tabs[0].title + "](" + tabs[0].url + ")";
                } else if (e.target.id == "pukiwiki") {
                    buff = "[[" + tabs[0].title + ":" + tabs[0].url + "]]";
                } else if (e.target.id == "html") {
                    buff = "<a href=\"" + tabs[0].url + "\">" + tabs[0].title + "</a>";
                }

                navigator.clipboard.writeText(buff);

                document.querySelector("#message").textContent = "copied.";

                setTimeout(function () {
                    window.close();
                }, 500);
            });
        }
    } catch (error) {
        document.querySelector("#message").textContent = error.message;
    }
});