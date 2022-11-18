<template>
  <div>
    <section id='skills' className='skills_Main'>
    
    <h5>What have I done so far</h5>
    <h2 className='skills_title'>My Background</h2>

    <div className='container skills_container'>
    
      <!--===============================PROFESSIONAL=====================-->

    <article className='skill'>
        <div className='skill_head'>
          <h3>Professional Experience</h3>   
        </div>

          <ul className='skill_list proffesional' >
            <li v-for="p in professionalList" :key="p.id">
              <v-icon name="md-workoutline" className='skill_list-icon'/>
              <p >
                {{p.startYear}} - {{p.endYear}} - {{p.jobTitle}} - {{p.jobPlace}}
              </p>
           </li>
          </ul>
      </article>

<!--===============================ACADEMICS=====================-->

      <article className='skill'>
        <div className='skill_head'>
          <h3>Academics</h3>   
        </div>
          <ul className='skill_list academic'>
            <li v-for="ac in academicsList" :key="ac.id">
              <v-icon name="la-book-solid" className='skill_list-icon'/>
              <p>
                {{ac.jobTitle}}
              </p>
           </li>
          </ul>

      </article>

    <!--===============================ACHIEVEMENTS=====================-->

    <article className='skill'>
        <div className='skill_head'>
          <h3>Awards</h3>   
        </div>   

        <ul className='skill_list awards'>
            <li v-for="aw in awardsList" :key="aw.id">
              <v-icon name="fa-award" className='skill_list-icon'/>
              <p >
                {{aw.endYear}} - {{aw.jobTitle}} - {{aw.jobPlace}}
              </p>
           </li>
          </ul>
      </article>

    </div>
  </section>
  </div>
 

</template>


<script>
/*
id index:
 0 - profressional | icon name : md-workoutline
 1 - Academics| icon name : la-book-solid
 2 - Awards| icon name : fa-award
*/


import './ExperienceStyle.css'
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebase/FirebaseConfig'

export default{

  name: "SkillsList",

  components:{},


  
  data() {
      return {
        
        professionalList: [],
        academicsList: [],
        awardsList: [],
      };
    },

  methods: {

    async fetchData() {


      //===============================QUERY ON PROFFESIONAL EXPERIENCE DB

      let queryProffesionals = await getDocs(collection(db, "e_Proffesional",));
      
      let professionalList = []

      queryProffesionals.forEach((p) => {

        professionalList.push(p.data())

      });

      this.professionalList = professionalList
      
      //===============================QUERY ON ACADEMICS EXPERIENCE DB

      const queryAcademics = await getDocs(collection(db, "e_Academics",));
      
      let fbAcademics = []

      queryAcademics.forEach((ac) => {

        fbAcademics.push(ac.data())
       
      });

      this.academicsList = fbAcademics

      //===============================QUERY ON AWARDS  DB

      const queryAwards = await getDocs(collection(db, "e_Awards",));
      
      let fbAwards = []

      queryAwards.forEach((aw) => {

        fbAwards.push(aw.data())
      });

      this.awardsList = fbAwards
  
    },
  },

  created(){
    this.fetchData();
  },
}
  


</script>