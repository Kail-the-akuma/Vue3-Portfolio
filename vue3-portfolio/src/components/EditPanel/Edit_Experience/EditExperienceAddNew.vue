<template>

    <div>  
        <form className="animate__animated animate__slideInLeft ">     

                <h2>New Exp</h2> 
                
 

                <div className="addExp_Form-inputs">

                    <label for="Start_Year">Start</label>
                    <input       
                    className="exp_input"   
                    type="text"       
                    placeholder="start" 
                    id="Start_Year"
                    v-model="startYear"           
                    />   
                     
                    <label for="End_Year">End</label>
                    <input       
                    className="exp_input"   
                    type="text"       
                    placeholder="end" 
                    id="End_Year"
                    v-model="endYear"           
                     />   
                     <label for="id">New id</label>
                    <input  
                    className="exp_input"     
                    type="text"       
                    placeholder="id"          
                    v-model="id"    
                    />   
                    
                    <label for="database_options">Type</label>
                    <select 
                     className="btn"
                    id="database_options"
                    v-model="whatDatabase"
                    >
                        <option value="e_Proffesional" selected="selected">
                            Proffesional
                        </option>
                        <option value="e_Academics">
                            Academics
                        </option>
                        <option value="e_Awards">              
                            Awards
                        </option>
                    </select>

                </div>
 

                <div className="addExp_Form-textAreas">
                
                <label for="jobPlace_area">Job Place</label>
                <input       
                className=""   
                type="text"       
                placeholder="Content" 
                id="jobPlace_area"
                v-model="jobPlace"           
                /> 

             
                </div>
             
                <div className="addExp_Form-textAreas">
                <label for="jobTitle_area">Job Title</label>
                <input       
                className=""   
                type="text"       
                placeholder="Content" 
                id="jobTitle_area"
                v-model="jobTitle"           
                /> 
                </div>

                <button @click="prepareForDatabase" className="btn-primary">Add new </button>   
            
        </form>
    </div>
</template>

<script>

    import { doc, setDoc } from 'firebase/firestore'
    import {db} from '../../../firebase/FirebaseConfig'
  
    export default{
  
        name: "SkillsList",
    
        components:{},
        
        data() {
            return {
            
            professionalList: [],
            academicsList: [],
            awardsList: [],

            startYear: " ",
            endYear:" ",
            experience: " ",
            whatDatabase:" ",
            jobPlace: "",
            jobTitle: "",
            
            id:'', 
            };
        },
    
        methods: {

            prepareForDatabase(e)
            {
                e.preventDefault() 
                this.addNewExp(this.whatDatabase)
                this.ClearFields()
            },

            ClearFields()
            {
                this.startYear = " ",
                this.endYear = " ",
                this.experience  = " ",
                this.jobPlace = "",
                this.jobTitle ="",
                this.id  = '';
            },

            // Add a new document with a generated id.
            addNewExp (whatDatabase)
            {   
                let id=this.id

                setDoc(doc(db, whatDatabase, id), 
                {
                    startYear: this.startYear,
                    endYear: this.endYear,
                    jobPlace: this.jobPlace,
                    jobTitle: this.jobTitle,
                    id: this.id,

                });
                alert('New Experience Entry Added');
            },
        }
    }
</script>