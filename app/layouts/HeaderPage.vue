<template>
    
  <!--Add Header to Pages by using <slot>-->
  <header class="headerContent">
    <div class="p-3 text-center">
      <slot />
    </div>
    
  </header>
  </template>

<script>

export default {
  name: 'HeaderPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/styles/styles.scss';
.headerContent{
  display: block;
  width: 100%;
}
</style>
