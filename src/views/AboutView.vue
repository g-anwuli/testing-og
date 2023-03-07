<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ShareNetwork network="whatsapp" :url="pageLink" title="" description=""
      >To whatsapp</ShareNetwork
    >
  </div>
  <head v-html="$options.head()"></head>
</template>
<script>
export default {
  name: "about",
  computed: {
    pageLink() {
      return window.location.href;
    },
  },
  data() {
    return {
      title: 'My Page Title',
      description: 'This is a description of my page',
      imageUrl: '../assets/logo.png'
    }
  },
  head() {
    return {
      title: {
        inner: this.title
      },
      meta: [
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:description',
          content: this.description
        },
        {
          property: 'og:image',
          content: this.imageUrl
        }
      ]
    }
  }
}
</script>
