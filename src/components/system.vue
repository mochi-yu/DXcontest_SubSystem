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
const URL = 'https://api.dxcontest.sora210.dev'

export default {
    data: function() {
        return {
            status: 'loading...',
            version: 'loading...'
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            axios.get(URL + '/health', { headers: { Authorization: process.env.API_KEY } })
            .then(response => { this.status = response.data.status })
            .catch((error) => { console.log(error) })
            axios.get(URL + '/version', { headers: { Authorization: process.env.API_KEY } })
            .then(response => { this.version = response.data.message })
            .catch((error) => { console.log(error) })
        }
    }
}

</script>

<style scoped>

</style>
