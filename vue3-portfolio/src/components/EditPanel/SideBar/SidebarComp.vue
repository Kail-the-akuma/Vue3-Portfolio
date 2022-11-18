<template>
	<div class="sidebar">

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/control-panel/dash">
            <v-icon name="fa-angle-right"/>
        </router-link>
        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/control-panel/edit-portfolio">
            <v-icon name="gi-console-controller"/>
        </router-link>
        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/control-panel/edit-experience">
            <v-icon name="fa-pen-nib"/>
        </router-link>
        <router-link class="back-home" to="/">
            <v-icon name="fa-home"/>
        </router-link>


    </div>
</template>

<script>


export default{


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
.nav_element
{
    border-radius: 1rem;
    margin-bottom: 1rem;
}
.router-link-active
{
    display: flex;
    background: var(--color-primary);
    color: var(--color-bg);
    border-radius: 1rem;
    margin-bottom: 1rem;
}

.nav_element:hover
{
    background :rgba(0,0,0,0.3);
}

.back-home
{
    position: fixed;
    z-index: 1;
    bottom: 1rem;
    padding: .5rem;
}

</style>
