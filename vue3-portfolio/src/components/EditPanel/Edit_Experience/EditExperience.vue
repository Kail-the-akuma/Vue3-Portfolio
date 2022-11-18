<template>
    <div className="edit-experience">
        <div className="edit_exp-options">
            <h3> Edit Experience</h3>
            <button className="btn" @click="showCurrent = !showCurrent">Create new</button>
        </div>
        <div>
            <div v-show="showCurrent">
            <ShowNew/>
            </div>
            <div>

            <ShowCurrent/>
            </div>
        </div>
 
    </div>
</template>

<script>
import './EditExpStyle.css'
import ShowCurrent from './EditExperienceSeeCurrent.vue'
import ShowNew from './EditExperienceAddNew.vue'
export default{
    data(){
        return{
            showCurrent: false,
        }
    },
    components:{
        ShowCurrent,
        ShowNew,
    },

}
</script>

<style scoped>

.edit-experience
{
    display: flex;
}
</style>