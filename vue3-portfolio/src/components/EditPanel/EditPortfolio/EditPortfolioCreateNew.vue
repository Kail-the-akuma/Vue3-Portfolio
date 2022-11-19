<template>
    
    <div>  
        <form className="animate__animated animate__slideInLeft ">     

                <h2>New Portfolio Entry</h2> 

<!-------------------------------------INFO-------------------------->
                <div className="addExp_Form-inputs">

                    <label for="Start_Year">Project</label>
                    <input       
                    className="exp_input"   
                    type="text"       
                    placeholder="Project Name" 
                    id="Title"
                    v-model="Title"           
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
                        <option value="p_game-dev">
                            Game
                        </option>
                        <option value="p_web-dev">
                            Web
                        </option>
                        <option value="p_design">              
                            Design
                        </option>
                    </select>

                </div>
 
<!-------------------------------------BUTTONS-------------------------->
                <div className="addExp_Form-textAreas">
                    
                    <label for="btn1_text">btn 1 text</label>
                    <input       
                    className=""   
                    type="text"       
                    placeholder="Content" 
                    id="btn1_text"
                    v-model="btn_1text"           
                    /> 
                    
                    <label for="btn1_link">btn 1 link</label>
                    <input       
                    className=""   
                    type="text"       
                    placeholder="Content" 
                    id="btn1_link"
                    v-model="btn_1link"           
                    /> 

                    <label for="btn2_text">btn 2 text</label>
                    <input       
                    className=""   
                    type="text"       
                    placeholder="Content" 
                    id="btn1_text"
                    v-model="btn_2text"           
                    /> 

                    
                    <label for="btn2_link">btn 2 link</label>
                    <input       
                    className=""   
                    type="text"       
                    placeholder="Content" 
                    id="btn2_link"
                    v-model="btn_2link"           
                    /> 

                </div>

<!-------------------------------------IMG-------------------------->
                <div>
                    <input       
                    className=""   
                    type="file"       
                    @change="onFileSelected($event)"
                    accept="image/*"
                    ref="file"
                    />

                    <div
                    class="np-image-preview"
                    v-if="imageFile != null && imageFile.length != 0"
                    >
                        <img className='portfolio-img' :src="imageFile" />
                    </div>

                </div>

<!-------------------------------------ADD-------------------------->
                <button 
                @click="prepareForDatabase" 
                className="btn-primary">Add new </button>   
            
        </form>
    </div>
</template>


<script>

    import { doc, setDoc } from 'firebase/firestore'
    import {db} from '../../../firebase/FirebaseConfig'
  
    export default{
  
        name: "PortfolioLists",
    
        components:{},
        
        data() {
            return {
            
                gamesList: [],
                webList: [],
                designList: [],

                imageFile: null,
                input: null,
                isImageUploading: false,

                Title: " ",
                imgLink:" ",            
                btn_1text: " ",
                btn_1link:" ",            
                btn_2text: "",           
                btn_2link: "", 
                id:'', 
            };
        },
    
        methods: {

            onFileSelected(event){
                this.input = event.target;
                if (this.input.files && this.input.files[0]) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        this.imageFile = e.target.result;
                    };
                reader.readAsDataURL(this.input.files[0]);
              }
            },
 

            prepareForDatabase(e)
            {
                e.preventDefault() 

                this.addNewExp(this.whatDatabase)
                this.ClearFields()
                alert('New Portfolio Entry Added');
            },

            ClearFields()
            {
                this.Title = " ",
                this.btn_1text = " ",
                this.btn_1link  = " ",
                this.btn_2text = " ",
                this.btn_2link =" ",
                this.imgLink = " ";
                this.id  = '';

                this.imageFile = null;
                this.input = null;
            },

            // Add a new document with a generated id.
            addNewExp (whatDatabase)
            {   
                let id=this.id

                setDoc(doc(db, whatDatabase, id), 
                {
                    Title: this.Title,
                    btn_1text: this.btn_1text,
                    btn_1link: this.btn_1link,
                    btn_2text: this.btn_2text,
                    btn_2link: this.btn_2link,
                    imgLink: this.imageFile,
                    id: this.id,

                });

            },
        }
    }
</script>