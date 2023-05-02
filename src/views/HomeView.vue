<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="sendNotification">Send Notification</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    requestPermission() {
      if (!("Notification" in window)) {
        throw new Error("Browser doesn't support Notification");
      }
      Notification.requestPermission().then((permission) =>
        console.log(permission)
      );
    },
    sendNotification() {
      new Notification("Test", {
        body: "This is a test Notification",
        icon: "./logo.png",
      });
    },
  },
  mounted() {
    this.requestPermission();
  },
};
</script>
