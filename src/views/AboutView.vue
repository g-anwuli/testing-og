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
      "https://storage.googleapis.com/cryptofundme_dev_bucket/cryptofundme_media/creators/8/campaign_images/image_1_16647442114.jpg";
      return window.location.href;
    },
  },
  metaInfo() {
    return {
      title: "About",
      meta: [
        {
          name: "description",
          content: "This is about testing about page",
        },
      ],
    };
  },
};
</script>
