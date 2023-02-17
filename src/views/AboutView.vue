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
  metaInfo: {
    title: "About test",
    meta: [
      { name: "description", content: "This is about testing about page" },
      { property: "og:title", content: "About test" },
      { property: "og:site_name", content: "godswilltest" },
      {
        property: "og:description",
        content: "This is about testing about page",
      },
      { property: "og:type", content: "profile" },
      {
        property: "og:url",
        content: window.location.href,
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/cryptofundme_dev_bucket/cryptofundme_media/creators/8/campaign_images/image_1_16647442114.jpg"
      },
    ],
  }
};
</script>
