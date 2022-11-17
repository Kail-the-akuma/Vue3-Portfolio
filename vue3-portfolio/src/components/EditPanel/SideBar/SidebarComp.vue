<template>
	<div class="sidebar">

        <router-link class="sidebar_icon" to="/control-panel/dash">
            <v-icon name="fa-angle-right"/>
        </router-link>


    </div>
</template>

<script>
import {collapsed, toggleSidebar, sidebarWitdth} from './state'


export default{

    props:{},

    setup(){
        return {collapsed, toggleSidebar, sidebarWitdth}
    },

}

</script>

<style scoped>
.sidebar{
    color: white;
    background-color: var(--color-bg-variant);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: .5rem;

    width: 3rem;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.sidebar_icon
{
    position: aabsolute;
    bottom: 0;
    padding: .75em;
    color: rgba(255,255,255,0.7);

    transition: 0.2s linear;
}


</style>
