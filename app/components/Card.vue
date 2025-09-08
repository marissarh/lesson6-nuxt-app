<script setup>
import { defineProps } from "vue"

const props = defineProps({
    name: String,
    subregion: String,
    flag: String,
    population: String,

})
const isExpanded = ref(false);
const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

</script>
<template>
    <div class="card" :class="{ expanded: isExpanded }" @click="toggleExpand">
        <img :src="props.flag" alt="Country Flag" class="flag">
        <h3>{{ props.name }}</h3>
        <p>Subregion: {{ props.subregion }}</p>
        <p>Population: {{ props.population }}</p>
        
    </div>
</template>
<style lang="scss">
@import '@/assets/styles/colors.scss';

.card{
    
    background-color: $softCream ;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease, background-color 0.3s ease;
    text-decoration: none;
    list-style-type: none;
}
.card:hover {
    background-color: $darkBrown ;
}
.card.expanded{
    background-color: $cream;
}
.flag {
    border-radius: 8px;
    width: 30%;
    padding-top: 20px;
    height: auto;
    display: block;
    margin: 0 auto;
    
    
}</style>