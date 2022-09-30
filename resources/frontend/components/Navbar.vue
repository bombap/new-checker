<template>
  <div>
    <b-navbar fixed toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand href="#">Zhen</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="/cards">Cards Checker</b-nav-item>
            <b-nav-item to="/accounts">Accounts Checker</b-nav-item>
            <b-nav-item to="/tools">Helper Tools</b-nav-item>
            <b-nav-item to="/donate">Donate</b-nav-item>
            <b-nav-item v-if="isLoggedIn" @click="logout">Logout</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-button variant="outline-light" href="icq:message?uin=696691479">@696691479</b-button>
        </b-navbar-nav>
    </b-navbar>
    </div>
</template>

<script>
export default {
    computed : {
        isLoggedIn() { 
            return true
            // return this.$store.getters['auth/isLoggedIn']
        }
    },
    methods: {
      logout: function () {
        this.$store.dispatch('auth/logout')
      }
    },
}
</script>

<style>

</style>