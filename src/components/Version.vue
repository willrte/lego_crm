<template>
  <div class="containerVersion">
    version
    {{ appVersion }}
  </div>

</template>

<script>

export default {
  name: 'Version',
  data () {
    return {
      appVersion: '0.5.6'
    }
  }
}

</script>


<style scoped>

.containerVersion{
  display: flex;
  width: max-content;
  padding: 0 0.5rem;
  height: max-content;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 20px;
}
</style>
