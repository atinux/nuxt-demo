<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user of users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

    return { users }
  }
}
</script>
