<template>
    <div className="main_container">
        <div className="main_container-left">
            <SidebarComp/>
        </div>
        <div className="main_container-right">
            <RouterView/>   
        </div>
    </div>
</template>

<script>

import SidebarComp from '../EditPanel/SideBar/SidebarComp.vue'

export default {

    components: {
        SidebarComp,
    }
}
</script>