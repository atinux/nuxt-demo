<template>
  <div>
    <ul>
      <li><NLink to="/">Home</NLink></li>
      <li><NLink to="/users">Users</NLink></li>
      <li><NLink to="/login">Login</NLink></li>
      <li><NLink to="/secret">Secret</NLink></li>
    </ul>
    <nuxt/>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  color: white;
  text-decoration: underline;
}
</style>
