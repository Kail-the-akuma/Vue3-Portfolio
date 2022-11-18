<template>
    <div>
   
        <section id='skills' className='skills_Main'>
            
            <h3> Professional Experience </h3>
            <table className='Professional_Table'>
                <thead>
                    <tr>
                        <th>Start Year</th>
                        <th>End Year</th>
                        <th>Job Title</th>
                        <th>Job Place</th>
                        <th> </th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="p in professionalList" :key="p.id">
                        <td>{{p.startYear}} </td>
                        <td>{{p.endYear}}</td>
                        <td>{{p.jobTitle}}</td>
                        <td>{{p.jobPlace}}</td>
                        <td>
                          <button className="btn-delete" @click="deleteRowP(p.id)">
                            <v-icon name="co-delete"/>
                          </button>
                        </td>
                    </tr>
                    </tbody>

            </table>

            <h3>Academic Path</h3>
            <table className='Professional_Table'>
                <thead>
                    <tr>
                        <th>Course </th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="ac in academicsList" :key="ac.id">
                        <td>{{ac.jobTitle}}</td>
                        <td>
                          <button className="btn-delete" @click="deleteRowAc ( ac.id)">
                            <v-icon name="co-delete"/>
                          </button>
                        </td>
                    </tr>
                    </tbody>

            </table>

            <h3>Awards</h3>
            <table className='Professional_Table'>
                <thead>
                    <tr>
                        <th>Date </th>
                        <th>Entity </th>
                        <th>Project </th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="aw in awardsList" :key="aw.id">
                        <td> {{aw.endYear}}</td>
                        <td> {{aw.jobPlace}}</td>
                        <td> {{aw.jobTitle}}</td>
                        <td>
                          <button className="btn-delete" @click="deleteRowAw(aw.id)">
                            <v-icon name="co-delete"/>
                          </button>
                        </td>
                    </tr>
                    </tbody>
            </table>
    
        </section>
    </div>
   
  
  </template>
  
  
  <script>
  
  
  import './EditExpCurr.css'
  import { collection, getDocs,doc, deleteDoc } from 'firebase/firestore';
  import {db} from '../../../firebase/FirebaseConfig'

  
  export default{
  
    name: "SkillsList",
  
    components:{},
  
  
    
    data() {
        return {
          
          professionalList: [],
          academicsList: [],
          awardsList: [],

          content: '',
          id:'', 
          
        };
      },
  
    methods: {
        

        //FETCH
      async fetchData() {
          //===============================QUERY ON PROFFESIONAL EXPERIENCE DB
    
          let queryProffesionals = await getDocs(collection(db, "e_Proffesional",));
          
          let professionalList = []
    
          queryProffesionals.forEach((p) => {
    

            professionalList.push(p.data())
            console.log(p.data());
    
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

      deleteRowP( id)
      {

        deleteDoc(doc(db, "e_Proffesional", id));

      },

      deleteRowAc( id)
      {
          
        deleteDoc(doc(db, "e_Academics", id));

      },

      deleteRowAw( id)
      {
          
        deleteDoc(doc(db, "e_Awards", id));

      }

    },
  



    created(){
      this.fetchData();
    },
  }
    
  
  
  </script>