<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/faq">FAQ</router-link> |
      <router-link to="/faq">About</router-link> |
      <router-link to="/faq">Contacts</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import "md"
  @import "~@fortawesome/fontawesome-free/scss/variables.scss"
  @import "~@fortawesome/fontawesome-free/scss/fontawesome.scss"
  @import "~bulma/bulma.sass"
</style>
