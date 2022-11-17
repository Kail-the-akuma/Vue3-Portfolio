<template>

    <section id='About' class="about_main">

      <!--Title-->
      <h5>Who Am I</h5>

      <h2>About Me</h2>
      
      <div className='container about_container'>

        <!--Left Area-->
        <div className='about_content'>

          <div className='about_cards'>
            
              <article className='about_card'>

                       <v-icon name="fa-pen-nib" class="about_icon"/>

                <h5>MULTIMEDIA</h5>

                <small>+ {{year}} years of experience </small> 

              </article>

              <article className='about_card'>

                        <v-icon name="gi-bookshelf" class="about_icon"/>

                <h5>LEARNING</h5>

                <small>You never know enough</small> 

              </article>

              <article className='about_card'>

                <v-icon name="fa-gamepad"  class="about_icon"/>

                <h5>VIDEO-GAMES</h5>

                <small>Game Dev Is My Dream</small> 

              </article>

          </div>

          <p>

            {{textContent}}
          
          </p>
          <router-link  to="/contacts" className='btn btn-primary'> Want To Talk? </router-link>


        </div>
       
        <!--Right Area-->
        <div className='about_me'>

          <div className='about_me-image'>

            <img src="../../assets/me-about.jpg" alt="About Image" />

          </div>
        </div>

      </div>
      
    </section>

</template>

<script>

import "./AboutCardStyle.css"


export default{



  data() {

    return { 

      year: (new Date().getFullYear()) - 2014 ,

      textContent:`
        For years I've known my passion is creating games,
        that love allowed me to learn both the technical and visual skills. \n
        I’ve always been a curious person and that made learning or trying to understand how things work 
        a part of me.
      `,
    
    }

  },

  components:{

}

}
</script>