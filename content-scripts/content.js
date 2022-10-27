

//Ultis
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text
}

function detectLeftButton(evt) {
    evt = evt || window.event;
    if ("which" in evt) {
        return evt.which == 1;
    }else if("button" in evt){
        return evt.button == 0;
    }else{
        return false
    }
}

function handleMouseUp(event){
    var selectedText = getSelectionText()
    if(detectLeftButton(event) ){
        if(selectedText !==''){
            var requestData = {
                action: "create",
                word:selectedText
            };
        }else{
            requestData = {
                actione:"remove"
            }
        }
        chrome.runtime.sendMessage(requestData);
    }
}



document.addEventListener("mouseup",handleMouseUp)