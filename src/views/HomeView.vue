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
check(){
if (!('serviceWorker' in navigator)) {
throw new Error('No Service Worker support!')
}
if (!('PushManager' in window)) {
throw new Error('No Push API Support!')
}
},
async registerServiceWorker(){
const swRegistration = await navigator.serviceWorker.register('sw.js'); //notice the file name
return swRegistration;
},
async requestNotificationPermission(){
const permission = await window.Notification.requestPermission();
if(permission !== 'granted'){
throw new Error('Permission not granted for Notification');
}
console.log(permission);
},
    async sendNotification() {
this.check()
const swRegistration = await this.registerServiceWorker();
const permission = await this.requestNotificationPermission();
        swRegistration.showNotification("Notification title", {
          icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
          body: "Hey there! You've been notified!",
        });
    },
  },
  mounted(){
//Notification.requestPermission();
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
