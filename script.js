<script>
  window.watsonAssistantChatOptions = {
    integrationID: "34912a6e-680b-448f-9ede-295faadcab16", 
    region: "au-syd", 
    serviceInstanceID: "bb623ba1-6d86-48b7-b30a-f04f5b53bc34", 
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>
