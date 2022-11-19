<template>
    <div className="edit-experience">
        <div className="edit_exp-options">
            <h1> Edit Portfolio</h1>
            <button className="btn" @click="showCurrent = !showCurrent">Create new</button>
        </div>
        <div>
            <div v-show="showCurrent">
                <AddNew/>
            </div>
            <div>
                <ShowCurrent/>

                </div>
        </div>
 
    </div>
</template>

<script>
import './EditPortfolioStyle.css'

import ShowCurrent from './EditPortfolioShowCurrent.vue'
import AddNew from './EditPortfolioCreateNew.vue'

export default{
    data(){
        return{
            showCurrent: false,
        }
    },
    components:{
        ShowCurrent,
        AddNew
    },

}
</script>