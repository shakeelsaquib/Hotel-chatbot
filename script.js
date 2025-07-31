window.watsonAssistantChatOptions = {
  integrationID: "YOUR_INTEGRATION_ID", // Replace with your actual integration ID
  region: "YOUR_REGION", // e.g. "us-south"
  serviceInstanceID: "YOUR_INSTANCE_ID", // Replace with your instance ID
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function() {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
