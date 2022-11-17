<template>
  <div id='Contacts' classname="contacts_Main" >

    <h5>Leave me a message</h5>
    <h2>Contact Me</h2>


     <div className='container contact_container'> 
    
     <!--====================================== LEFT FORM ======================-->

        <form ref="form" @submit.prevent="sendEmail">

            <input type="text" name="user_name" placeholder='Your Name' required>

            <input type="email" name="user_email" placeholder='Your Email' required>

            <textarea name="message" placeholder='Your Message' required></textarea>

            <input type="submit" value="Send Message" className='btn btn-primary'>

        </form>
            
        
        <!--
                <ReCAPTCHA sitekey='6LftbqUgAAAAAF4YWPs01SxKeqWtHIg-JE_hbL0T' onChange={onChange}/>
        --> 
        <!---====================================== RIGHT CARDS ======================-->
        <div className='contact_options'>
          <article className='contact_option'>
            <v-icon name="md-email-outlined" className='skill_list-icon'/>
            <h4>Email</h4>
            <h5 className='email_text'>hugo_garelha_123@hotmail.com</h5>
            <a href='mailto:hugo_garelha_123@hotmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
            <v-icon name="fa-facebook-messenger" className='skill_list-icon'/>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Hugo Gonçalves</h5>
            <a href='https://m.me/HugoGarelha/' target='_blank'>Send a message</a>
          </article>


          <article className='contact_option'>
            <v-icon name="fa-whatsapp" className='skill_list-icon'/>
            <h4>Whatsapp</h4>
            <h5>+351 935 096 346</h5>
            <a href='https://api.whatsapp.com/send?phone=935096346' target='_blank'>Send a message</a>
          </article>
           </div>        
     </div>
    </div>

</template>

<script>
import'./ContactsCardStyle.css'
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_5d8qqj1', 'template_nchlly9', this.$refs.form, 'dHkt93wAGi-mprf-P')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}


</script>