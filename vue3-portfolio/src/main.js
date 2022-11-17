import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
/*===============================ICONS*=================*/
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub, BiLinkedin,BiBehance,FaItchIo,
        FaHome,FaUserCircle,GiConsoleController,
        FaPenNib,GiBookshelf,FaGamepad,
        MdWorkoutline,LaBookSolid,FaAward,
        SiCsharp,CoCplusplus,FaHtml5,FaCss3Alt,FaReact,FaVuejs,FaRegularCircle,CoMysql,IoLogoFirebase,
        CoUnity,CoUnrealEngine,CoBlender,CoKrita,
        SiAdobeillustrator,SiAdobephotoshop,SiAdobexd,SiAdobepremierepro,SiAdobeaftereffects,
        MdEmailOutlined,FaFacebookMessenger,FaWhatsapp,
        } from "oh-vue-icons/icons";



addIcons(BiGithub, BiLinkedin,BiBehance,FaItchIo,
        FaHome,FaUserCircle,GiConsoleController,
        FaPenNib,GiBookshelf,FaGamepad,
        MdWorkoutline,LaBookSolid,FaAward, 
        SiCsharp,CoCplusplus,FaHtml5,FaCss3Alt,FaReact,FaVuejs,FaRegularCircle,CoMysql,IoLogoFirebase,
        CoUnity,CoUnrealEngine,CoBlender,CoKrita,
        SiAdobeillustrator,SiAdobephotoshop,SiAdobexd,SiAdobepremierepro,SiAdobeaftereffects,
        MdEmailOutlined,FaFacebookMessenger,FaWhatsapp,
        );

import "@/styles/global.css"

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);
app.mount('#app');

