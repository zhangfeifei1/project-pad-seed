<template>
  <div class="dashboard-container">
    提交成功
  </div>
</template>

<script>

export default {
  name: 'FormRes',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
