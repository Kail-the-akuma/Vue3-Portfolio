<template>
    <section id='Portfolio' className="portfolio_main">
        <div className="portfolio_main-container">
            <section id='skills' className='skills_Main'>
            
            <h3> Game Develpment </h3>
            <table className='Professional_Table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Img</th>
                        <th>Btn 1 text</th>
                        <th>Btn 2 text</th>
                        <th> </th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="g in gamesList" :key="g.id">
                        <td>{{g.Title}} </td>
                        <td><img v-bind:src="g.imgLink" alt="texthere" className='portfolio-img'/></td>
                        <td>{{g.btn_1text}}</td>
                        <td>{{g.btn_2text}}</td>
                        <td>
                          <button className="btn-delete" @click="deleteRowG(g.id)">
                            <v-icon name="co-delete"/>
                          </button>
                        </td>
                    </tr>
                    </tbody>

            </table>

            <h3> Web Develpment </h3>
            <table className='Professional_Table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Img</th>
                        <th>Btn 1 text</th>
                        <th>Btn 2 text</th>
                        <th> </th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="w in webList" :key="w.id">
                        <td>{{w.Title}} </td>
                        <td><img v-bind:src="w.imgLink" alt="texthere" className='portfolio-img'/></td>
                        <td>{{w.btn_1text}}</td>
                        <td>{{w.btn_2text}}</td>
                        <td>
                          <button className="btn-delete" @click="deleteRowW(w.id)">
                            <v-icon name="co-delete"/>
                          </button>
                        </td>
                    </tr>
                    </tbody>

            </table>

            <h3> Graphic Design </h3>
            <table className='Professional_Table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Img</th>
                        <th>Btn 1 text</th>
                        <th> </th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="d in designList" :key="d.id">
                        <td>{{d.Title}} </td>
                        <td><img v-bind:src="d.imgLink" alt="texthere" className='portfolio-img'/></td>
                        <td>{{d.btn_1text}}</td>
                        <td>
                          <button className="btn-delete" @click="deleteRowD(d.id)">
                            <v-icon name="co-delete"/>
                          </button>
                        </td>
                    </tr>
                    </tbody>

            </table>

        </section>
        </div>
    </section>

</template>

<script>

    //import '../..Portfolio/PortfolioStyle.css'

    import { collection, getDocs, doc, deleteDoc  } from 'firebase/firestore';
    import {db} from '../../../firebase/FirebaseConfig'

    export default{

        name: "PortfolioList",

        components:{},

        data() {
            return {
                gamesList: [],
                webList: [],
                designList: [],
            };
        },

        methods: {

            async fetchData() {

                //===============================QUERY ON GAME DEV DB

                let queryGames = await getDocs(collection(db, "p_game-dev",));
                
                let gamesList = []

                queryGames.forEach((g) => {
                    gamesList.push(g.data())
                });

                this.gamesList = gamesList

                //===============================QUERY ON WEB DEV DB

                let queryWeb= await getDocs(collection(db, "p_web-dev",));
                
                let webList = []

                queryWeb.forEach((w) => {
                    webList.push(w.data())
                });

                this.webList = webList
            

                //===============================QUERY ON DESIGN DB

                let queryDesign= await getDocs(collection(db, "p_design",));
                
                let designList = []

                queryDesign.forEach((d) => {
                    designList.push(d.data())
                });

                this.designList = designList
            
            },


             //====================================================DELETE METHODS 
            deleteRowG( id)
            {
                deleteDoc(doc(db, "p_game-dev", id));
                alert('Deleted Element from Game Dev');
            },

            deleteRowW( id)
            {
                deleteDoc(doc(db, "p_web-dev", id));
                alert('Deleted Element from Web Dev');
            },

            deleteRowD( id)
            {   
                deleteDoc(doc(db, "p_design", id));
                alert('Deleted Element from Design');
            },
        },


      

        created(){
            this.fetchData();
        },
    }

</script>
      
