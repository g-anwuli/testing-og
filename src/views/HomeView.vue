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
    sendNotification() {
        Alert('working')
        const notification = new Notification("Notification title", {
          icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
          body: "Hey there! You've been notified!",
        });

        notification.onclick = function () {
          window.open("http://stackoverflow.com/a/13328397/1269037");
        };
    },
  },
  mounted(){
Notification.requestPermission(p=>alert(p));
}
};
</script>
<style>
button{
background:blue;
color:#fff;
width:200px;
height:50px;
border:none;
outline:none;
}
</style>
