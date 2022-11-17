<template>
    <section id='Portfolio' className="portfolio_main">
        <h5>My Works</h5>
        <h2>Portfolio</h2>
        <div className="portfolio_main-container">
            <!--================ GAME DEV =================-->

            <h3 className='portfolio_category'>Game Development</h3>
            <div className='container portfolio_container'>

               <article v-for="g in gamesList" :key="g.id" className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img v-bind:src="g.imgLink" alt="texthere" />
                    </div>
        
                    <h3>{{g.Title}}</h3>
        
                    <div className='portfolio_item-cta'>
                        <a v-bind:href="g.btn_1link" className='btn ' target='_blank'>{{g.btn_1text}}</a>        
                        <a v-bind:href="g.btn_2link" className='btn btn-primary' target='_blank'>{{g.btn_2text}}</a>                    
                    </div>
                </article>
            </div>

            <!--{================ WEB DEV =================*/}-->
            <h3 className='portfolio_category'>Web Development</h3>
            <div className='container portfolio_container'>

                <article v-for="w in webList" :key="w.id" className='portfolio_item'>

                    <div className='portfolio_item-image'>
                        <img v-bind:src="w.imgLink" alt="texthere" />
                    </div>

                    <h3>{{w.Title}}</h3>

                    <div className='portfolio_item-cta'>
                        <a v-bind:href="w.btn_1link" className='btn ' target='_blank'>{{w.btn_1text}}</a>
                        <a v-bind:href="w.btn_2link" className='btn btn-primary' target='_blank'>{{w.btn_2text}}</a>                    
                    </div>
               </article>
            </div>
      
          <!--================ GRAPHIC DESIGN =================*/}-->
 
            <h3 className='portfolio_category'>Graphic Design</h3>
            <div className='container portfolio_container'>

                <article v-for="d in designList" :key="d.id" className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img v-bind:src="d.imgLink" alt="texthere" />
                    </div>

                    <h3>{{d.Title}}</h3>

                    <div className='portfolio_item-cta'>
                        <a v-bind:href="d.btn_1link" className='btn ' target='_blank'>{{d.btn_1text}}</a>
                        <a v-bind:href="d.btn_2link" className='btn btn-primary' target='_blank'>{{d.btn_2text}}</a>                    
                    </div>
                </article>
            </div>
        </div>
    </section>

</template>

<script>

    import './PortfolioStyle.css'

    import { collection, getDocs } from 'firebase/firestore';
    import {db} from '../../firebase/FirebaseConfig'

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
        },

        created(){
            this.fetchData();
        },
    }

</script>
      