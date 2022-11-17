<template>
<div>
  <NavComponent/>

  <router-view v-slot="{ Component, route }">
            <transition enter-active-class="animate__animated animate__fadeInUp" 
            leave-active-class="animate__animated animate__fadeOutUp"
            vmode="out-in"
            >
                  <component :is="Component" :key="route.path" />
            </transition>
      </router-view>
</div>
 </template>
  
  <script>

  import NavComponent from '../nav/NavComponent.vue'


  export default {
    name: 'App',
    components: {
      NavComponent
    },



  }
  </script>

  
<style>
/*=====================COMPONENT TRANSITIONS=============*/

.fade-enter-from,
.fade-leave-to
{
      opacity: 0;
}

.fade-enter-active,
.fade-leave-active
{
      transition: opacity 0.5s ease-out;
}

</style>