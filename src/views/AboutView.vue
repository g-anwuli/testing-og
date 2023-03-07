<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ShareNetwork network="whatsapp" :url="pageLink" title="" description=""
      >To whatsapp</ShareNetwork
    >
  </div>
</template>
<script>
export default {
  name: "about",
  computed: {
    pageLink() {
      return window.location.href;
    },
  },
  created() {
    const tag = document.createElement("meta");
    tag.setAttribute(
      "property",
      "og:image"
    );
    tag.setAttribute(
      "content",
      `../assets/logo.png`
    );
    tag.setAttribute("data-vue-router-controlled", "");
    document.head.appendChild(tag)
  },
};
</script>
