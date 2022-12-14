import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged} from 'firebase/auth';

import BaseCard from '../components/Views/BasePanel.vue'

import Home from '../components/Views/Home.vue'
import MainCard from '../components/MainCard/MainCard.vue';
import AboutCard from '../components/About/AboutCard.vue';
import SkillsCard from '../components/Skills/SkillsCard.vue';
import ExperienceCard from '../components/Experience/ExperienceCard.vue';
import ContactCard from '../components/Contacts/ContactsCard.vue'
import PortfolioCard from '../components/Portfolio/PortfolioCard.vue'
import FooterComponent from '../components/Footer/FooterComponent.vue'

import Login from '../components/Views/LogIn.vue'

import ControlPanel from '../components/Views/ControlPanel.vue'
import DashBoard from '../components/EditPanel/Dashboard/DashboardCard.vue'
import EditPortfolio from '../components/EditPanel/EditPortfolio/EditPortfolio.vue'
import  EditExperience from '../components/EditPanel/Edit_Experience/EditExperience.vue'


const routes = [
    
    {
        path:'/base',
        name: 'BaseCard',
        component: BaseCard,
        children:[
           
            {
                path: '/login',
                name: 'login',
                component: Login
            },
        
            {
                path: '/control-panel',
                name: 'ControlPanel',
                component: ControlPanel,
                meta:{
                    requiresAuth:true,
                },
                children:[
                    {
                        path:'/control-panel/dash',
                        name:'Dashboard',
                        component:DashBoard,
                    },
                    {
                        path:'/control-panel/edit-portfolio',
                        name:'Edit-Portfolio',
                        component:EditPortfolio,
                    },
                    {
                        path:'/control-panel/edit-experience',
                        name:'Edit-Experience',
                        component:EditExperience,
                    },
                ]
            },
            
            /*================================HOME ROUTES===================*/
            {
                path: '/none',
                name: '',
                component: Home,
          
                children:[
                    {           
                    path: '/',
                    name: 'Welcome',
                    component: MainCard,
                    },
        
                    {
                        path: '/about',
                        name: 'About',
                        component: AboutCard
                    },
                
                    {
                        path: '/skills',
                        name: 'Skills',
                        component: SkillsCard
                    },
                
                    {
                        path: '/experience',
                        name: 'Experience',
                        component: ExperienceCard
                    },
                
                    {
                        path: '/portfolio',
                        name: 'Portfolio',
                        component: PortfolioCard
                    },
                
                
                    {
                        path: '/contacts',
                        name: 'Contacts',
                        component: ContactCard
                    },
                    
                    {
                        path: '/footer',
                        name: 'footer',
                        component: FooterComponent
                    },
                
                ]
            },
        ]
    }
 


   

    
]

const getCurrentUser = () => {
    return new Promise((resolve,reject) =>{
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user)=>{
                removeListener,
                resolve(user);
            },
            reject
        )
    })
}


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
    scrollBehavior(to,from,savedPosition) //Return to page Top(important for mobile version)
    {
        if(savedPosition)
        {
            return savedPosition
        }
        else
        {
            return{ left: 0, top: 0 }
        }
    }
    
  })

    router.beforeEach(async(to,from,next) => {
        if (to.matched.some((record)=> record.meta.requiresAuth))
        {
            if(await getCurrentUser())
            {
                next();
            }
            else
            {
                alert('You shall not pass!')
                next('/')
            }
        }
        else
        {
            next()
        }
    });

  export default router      