<template>
  <div class="page">
    <div class="titre">
      <p style="font-size: 30px; font-weight: bold">Clients</p>
    </div>
    <div class="content">

    </div>

  </div>

</template>

<script>

export default {
  name: 'Clients',
}
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

}
.titre{
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.content{
  display: flex;
  width: 100%;
  height: 100%;
  background: #939393;
  margin-bottom: 1rem;
  border-radius: 20px;
}
</style>