chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var five = 3 + 2;
    if (request.greeting == "SendMessage!")
      sendResponse({farewell: "goodbye" + five});

  });