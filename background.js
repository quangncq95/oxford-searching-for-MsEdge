function onRequest(request, sender, callback){    
    const searchWord = request.word
    console.log(request)
    if(request.action == 'create'){
             chrome.contextMenus.remove("123")
            var contextItemProperties = {};
            contextItemProperties.title = `look up : ${searchWord}`;
            contextItemProperties.id="123";
            contextItemProperties.contexts=["selection"]
            chrome.contextMenus.create(contextItemProperties);
    }else if(request.action == "remove"){
        //  chrome.contextMenus.remove("123")
    }
 } 

 function handleMenuClick(info,tab){
   var selectedText = info.selectionText
    selectedText = selectedText.toLowerCase()
    const oxfordUrl = `https://www.oxfordlearnersdictionaries.com/search/english/?q=${selectedText}`
    const windowFeatures = "left=800,top=100,width=495,height=800";
    window.open(oxfordUrl,"titile",windowFeatures)
 }
 chrome.runtime.onMessage.addListener(onRequest);
 chrome.contextMenus.onClicked.addListener(handleMenuClick)


 //subscribe on request from content.js: