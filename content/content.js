// $(document).ready(function(){
//     debugger;
// })
//debugger;
console.count('APP.JS !!!!!');
var hello = function(){
    console.count('Hello! Content script started!');
    //$('body').html('SS');
    chrome.runtime.sendMessage({greeting:"SendMessage!"}, response =>{
        console.log("RESPONSE(content):");
        debugger;
        document.body.style.backgroundColor="yellow";
        console.log(response);
    });
}
hello();

APPOBJECT = {
    name: "APPOBJECT",
    getName: function(){
        return this.name;
    }
};

window.appObject = APPOBJECT;
