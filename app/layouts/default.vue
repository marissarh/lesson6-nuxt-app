<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import HeaderPage from './HeaderPage.vue';
import FooterComponent from './FooterComponent.vue';

</script>

<template>
    <div>
        <HeaderPage />
        <NavigationBar />
        
        <slot />
        <FooterComponent />
    </div>
</template>
