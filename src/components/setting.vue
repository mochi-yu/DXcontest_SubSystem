<template>
    <div>
        <h1>設定</h1>
        <h2>ユーザー新規登録</h2>
        名前：<input v-model="userName"><br>
        学籍番号：<input v-model="studentNo"><br>
        <button v-on:click="userEntry">登録</button><br>

        <h2>ユーザー更新</h2>
        名前：<input v-model="userName"><br>
        学籍番号：<input v-model="studentNo"><br>
        <button v-on:click="userUpdate">更新</button><br>

        <h2>ユーザー削除</h2>
        名前：<input v-model="userName"><br>
        学籍番号：<input v-model="studentNo"><br>
        <button v-on:click="userDelete">削除</button><br>
    </div>
</template>

<script>
import axios from 'axios'
const URL = 'https://api.dxcontest.sora210.dev'

export default{
    data: function() {
        return {
            userName: '',
            studentNo: ''
        }
    },
    methods: {
        userEntry: function(){
            axios.post(URL + '/users', {
                name: this.userName,
                schoolID: this.studentNo
            })
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
        },
        userUpdate: function(){
            axios.patch(URL + '/users/' + this.userID, {
                headers: { Authorization: process.env.API_KEY }
            },
            {
                name: this.userName,
                schoolID: this.studentNo
            })
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
        },
        userDelete: function(){
            axios.delete(URL + '/users/' + this.userID, {
                headers: { Authorization: process.env.API_KEY }
            },
            {
                name: this.userName,
                schoolID: this.studentNo
            })
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
        }
    }
}
</script>

<style scoped>

</style>
