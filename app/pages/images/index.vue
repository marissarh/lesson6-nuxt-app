<template>
    <!--Include Header & Image Component to page-->
     <HeaderPage>
         <h1 class="text-primary">{{ title }}</h1>
        <!--<h1 class="text-primary">View Images</h1>-->
    </HeaderPage>
   
    <!--Use Bootstrap to center images. Include defined props-->
    <div class="mainContent">
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <ImageComponent 
        :src="BeachPath"
        alt="image of beach pathway"
        title="Click to toggle border"
        />
        <ImageComponent 
        :src="LifeguardStation"
        alt="image of lifeguard station on the beach"
        title="Click to toggle border"
        />
        <ImageComponent 
        :src="OceanRocks"
        alt="image of huges arches made of rock in the ocean"
        title="Click to toggle border"
        /></div>
    </div>
    </div>
</template>
<script>
import ImageComponent from '@/layouts/ImageComponent.vue';
import BeachPath from '@/assets/images/BeachPath.jpg';
import LifeguardStation from '@/assets/images/LifeguardStation.jpg';
import OceanRocks from '@/assets/images/OceanRocks.jpg';
import HeaderPage from '@/layouts/HeaderPage.vue';

export default{
    name: 'ImagesPage',
    components:{
        ImageComponent,
        HeaderPage
    },
    data(){
        return {
            BeachPath,
            LifeguardStation,
            OceanRocks,
            title: 'View Images'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'Nuxt-App',
            content: 'View Images of beach | Nuxt-App'
          }
        ]
      }
    }
  }
</script>
