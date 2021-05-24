<template>
  <div id="app">
    <yan-navigasyon />
    <router-view />
  </div>
</template>

<script>
import YanNavigasyon from "./components/YanNavigasyon.vue";
export default {
  components: { YanNavigasyon },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap");
* {
  font-family: "Sen", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
$bg-dark: #2d2d2a;
$accent: #4c4c47;
$color: #e5dcc5;
$primary: #848fa5;
$secondary: #c14953;
$warning: #fff07c;
$success: #80ff72;
$error: #fb4b4e;
#app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  background: $accent;
  //Yan navigasyon - Başlangıç
  color: $color;
  .content {
    grid-column: 3/13;
  }
  nav {
    background: $bg-dark;
    grid-column: 1/3;
    float: left;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    .header {
      #urun {
        color: $warning;
      }
      padding: 2em;
    }
    sub {
      padding-bottom: 1em;
    }
    h1 {
      font-size: 2em;
    }
    ul {
      list-style: none;
      li {
        width: 100%;
        a {
          color: inherit;
          font-size: 1.2em;
          cursor: pointer;
          display: block;
          padding-top: 1em;
          padding-bottom: 1em;
          text-anchor: middle;
          text-align: center;
          text-decoration: none;
          &:hover {
            color: $color;
            background: #4e4e49;
          }
          &.router-link-exact-active {
            &:hover {
              cursor: default;
            }
            background: $primary;
          }
        }
      }
    }
  }
  //Yan navigasyon - Bitiş
}
</style>
