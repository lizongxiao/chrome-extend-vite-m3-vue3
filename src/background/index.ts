// src/background/index.ts

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(
    "[ request, sender, sendResponse ]-8",
    request,
    sender,
    sendResponse
  );
  console.log(`Message received from ${sender.tab?.url}:`, request);

  if (request.type === "fetchData") {
    // 这里可以执行一些异步操作，例如从服务器获取数据
    const data = "Some data from the background script.";
    sendResponse({ result: data });
  }

  return true; // 必须返回true才能发送response
});

// 发送消息给content脚本
function sendMessageToContent(message: any) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id!, message);
  });
}

// 发送消息给popup
function sendMessageToPopup(message: any) {
  chrome.runtime.sendMessage(message);
}

export { sendMessageToContent, sendMessageToPopup };
