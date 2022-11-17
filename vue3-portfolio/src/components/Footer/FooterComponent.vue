<template>

    <footer>
        <a href='#' className='footer_logo'>HugoGarelha</a>
        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Experience'>Experience</a></li>
            <li><a href='#Portfolio'>Portfolio</a></li>
            <li><a href='#Contacts'>Contacts</a></li>
        </ul>
        
        <div className='footer_socials'>

            <a target="_blank" href="https://www.linkedin.com/in/hugo-garelha/">
                <v-icon name="bi-linkedin"/>
            </a>

            <a target="_blank" href="https://github.com/Kail-the-akuma/">
                <v-icon name="bi-github"/>
            </a>

            <a target="_blank" href="https://www.behance.net/Hugo_garelha">
                <v-icon name="bi-behance"/>
            </a>

            <a target="_blank" href="https://hugogarelha.itch.io/">
                    <v-icon name="fa-itch-io"/>
            </a>

      </div>

      <div className='footer_copyright'>
        <small>&copy;Hugo Garelha.</small>
      </div>
    </footer>

</template>


<script>
import './FooterStyle.css'

export default{

}

</script>