<template>
  <div>
    <h1>Hello 👋</h1>
    <multiselect v-model="value" :options="options"></multiselect>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: null,
      options: ['Angular', 'React', 'Vue']
    }
  }
}
</script>
