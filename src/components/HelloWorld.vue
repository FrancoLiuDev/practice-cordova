<template>
   <div>
	   
            <h1 class="title">
                Vue Nuxt
            </h1>
            <div class="links">
                 <router-link :to="'VgaDraw'">VgaDraw</router-link>
               
            </div>
        </div>
</template>

<script>
import StyStateButton from '@Components/designs/StyStateButton.vue'
export default {
    name: 'HelloWorld',
    components: {
        StyStateButton
    },
    data() {
        return {
            msg: 'Welcome',
            sbtoption: {
                size: 'small',
                style: 'solid' //solid hollow
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bt-size {
    width: 60px;
    height: 35px;
}
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
