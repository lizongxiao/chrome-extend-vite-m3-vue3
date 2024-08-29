// src/content/index.ts
console.log("Content script loaded");

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  console.log("[ message, _, sendResponse ]-5", message, _, sendResponse);
  console.log(`Message received in content script:`, message);

  if (message.type === "fetchData") {
    // 这里可以执行一些页面特定的操作
    const data = "Some data from the content script.";
    sendResponse({ result: data });
  }

  return true; // 必须返回true才能发送response
});

// 发送消息给background脚本
function sendMessageToBackground(message: any) {
  chrome.runtime.sendMessage(message);
}

export { sendMessageToBackground };
