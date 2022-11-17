<template>
  <div className="login_container">   
    <form @submit.prevent="login" className="login_form">     

      <div className="container columns">
       
        <div className="column-rigth">
          <h2>Login</h2> 

          <input       
          className="log_input"   
          type="email"       
          placeholder="Email address..."       
          v-model="email"     
          />     

      
          <input  
          className="log_input"     
          type="password"       
          placeholder="password..."       
          v-model="password"     
         />     

         <button type="submit" className="btn-primary">
            Login
          </button>   

       </div>

       <div className="column-left">

        <h2>Right Place</h2>
      </div>
        
      </div>    
    
    </form> 
  </div>
    
    
</template>
    
    
<script >
 
  import './LoginStyle.css'
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


  export default {
    name: 'LogIn-data',
    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        login() {

          const auth = getAuth()

          signInWithEmailAndPassword(auth,this.email, this.password)
          .then(() => {
            alert('Successfully logged in');
            this.$router.push('/control-panel')
          })
          .catch(error => {
            alert(error.message);
        });
      },
    },
  };
    
    
    </script>