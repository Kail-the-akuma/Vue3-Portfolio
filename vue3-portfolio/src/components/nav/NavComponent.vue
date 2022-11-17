<template>
    <nav>

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/">
            <v-icon name="fa-home"/>
        </router-link>

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/about">
            <v-icon name="fa-user-circle"/>
        </router-link>

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/skills">
            <v-icon name="gi-bookshelf"/>
        </router-link>

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/experience">
            <v-icon name="fa-pen-nib"/>
        </router-link>

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/portfolio">
            <v-icon name="gi-console-controller"/>
        </router-link>

        <router-link v-bind:class="['nav_element',{'router-link-active' : isActive}]" to="/contacts">
            <v-icon name="md-email-outlined"/>
        </router-link>
</nav>



</template>

<script>

import './NavStyle.css'

export default {

}
</script>

