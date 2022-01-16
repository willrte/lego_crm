<template>
  <div className="content">
    <div className="titre">
      <h1>Clients</h1>

    </div>
  </div>

</template>

<script>

export default {
  name: 'Clients',
}
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.titre {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}
</style>