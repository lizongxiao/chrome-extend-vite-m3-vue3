<template>
  <div class="popup">
    <h1>👋 hello vue3 with typescript by chrome ext</h1>
    <h2>🙂 i,am Popup page</h2>
    <h3 @click="sendMessageBackground">👉 Call Background page</h3>
    <h3 @click="sendMessageContent">👉 Call content page</h3>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: "Popup",
});

// 发送消息给background脚本
const sendMessageBackground = () => {
  chrome.runtime.sendMessage({ type: "fetchData" }).then((response) => {
    console.log("Response from background:", response);
  });
};

// 发送消息给content脚本
const sendMessageContent = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0 && tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id!, { type: "fetchData" }).then(
        (response) => {
          console.log("Content script response:", response);
        },
        (error) => {
          console.error("Failed to send message to content script:", error);
        }
      );
    }
  });
};
</script>

<style scoped lang="scss">
.popup {
  width: 500px;
  padding: 24px 18px;
}
</style>
