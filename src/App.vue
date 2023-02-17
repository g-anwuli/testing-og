<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "App",
  metaInfo: {
    title: "Landing",
    titleTemplate: '%s - testing',
    meta: [
      { vmid:"description", name: "description", content: "This is about testing" },
      { property: "og:title", content: "Landing test" },
      { property: "og:site_name", content: "godswilltest" },
      { property: "og:type", content: "website" }
    ],
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
