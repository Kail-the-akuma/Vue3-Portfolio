<template>

   <header>

      <div className='container header_container'>

        <h5>Hi there! I'm</h5>

        <h1>Hugo Garelha</h1>

        <h5 className='text-light'>Welcome to my Portfolio in Vue.JS</h5>

        <CTA/>

        <SocialLinks/>
        <router-link  to="/portfolio" className='scroll_down'>Portfolio</router-link>

      </div>

    </header>

</template>

<!---------------------------------------------------------------------->
<script>

import "./MainCardStyle.css"

import SocialLinks from './SocialLinks.vue';
import CTA from './CTA.vue';


export default{

    components:{
        SocialLinks,
        CTA
    }

}

</script>


