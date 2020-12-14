<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  resize: none;
}

.container {
  margin: 0 auto;
  padding: 3rem 0;
  width: 1280px;
  text-align: left;
}

.btn {
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #42b983;
  color: #fff;
  padding: .5rem 2rem;
  text-decoration: none;
  border: none;
}

.overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, .7);
}
</style>
