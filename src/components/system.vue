<template>
    <div>
        <h1>システム</h1>
        <h2>サーバー状態</h2>
        <ul>
            <li>状態： {{ status }}</li>
            <li>バージョン：{{ version }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

const URL = 'https://api.dxcontest.sora210.dev/'

export default {
    beforeRouterEnter(to, from, next){
        next((vm) => {
            vm.load()
        })
    },
    methods: {
        data: function() {
            return {
                status: 'none',
                version: 'none'
            }
        },
        load(){
            axios.get(URL + '/version', { headers: { Authorization: KEY } })
            .then(response => { this.status = response })
            .catch((error) => { console.log(error) })
        }
    }
}

</script>

<style scoped>

</style>
