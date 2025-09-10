<template>
    <div>
     <!--Include Header & Image Component to page-->
     <HeaderPage>
      
       <h1 class="text-primary">View Countries in America API Data on Grid Page</h1>
    </HeaderPage>
   
    <div class="grid-container">
        <ul>
    <li v-for="country in countries" :key="country.cca3">
        <Card 
        :name="country.name.common"
        :subregion="country.subregion"
        :flag="country.flags.png"
        :population="country.population"
        />
    </li>
</ul>
</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Card from "@/components/Card.vue"

const countries = ref([]);

onMounted(async() => {
    try{
        const response = await fetch("https://restcountries.com/v3.1/region/america")
        countries.value = await response.json();
        console.log(countries.value);
    } catch (error){
        console.error(error);
    }
})

    definePageMeta({
    
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'Nuxt-App',
            content: 'Grid Page| Nuxt-App'
          }
        ]
      }
    )
  
</script>

<style scoped>

.grid-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
   
}
li{
    list-style-type: none;
    padding: 10px
}</style>
