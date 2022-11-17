<template>
      <div class="main-page">
            <NavComponent/>
      </div>

      <router-view v-slot="{ Component, route }">
            <transition enter-active-class="animate__animated animate__fadeInUp" 
            leave-active-class="animate__animated animate__fadeOutUp"
            vmode="out-in"
            >
                  <component :is="Component" :key="route.path" />
            </transition>
      </router-view>

</template>

<script>
import NavComponent from './components/nav/NavComponent.vue'




export default {

      mounted()
  {
    window.scrollTo(0,0)
  },

      components:{
            NavComponent,
      }

};

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