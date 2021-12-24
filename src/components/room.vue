<template>
    <div>
        <h1>ルーム1</h1>
        <button v-on:click="openModal('enter')">入室</button>
        <button v-on:click="openModal('exit')">退出</button>
        <div id="overlay" v-show="showContent">
            <div id="content">
                学籍番号 <input v-model="userID">
                <button v-if="mode == 'enter'" v-on:click="enter">入室</button>
                <button v-if="mode == 'exit'" v-on:click="exit">退室</button>
                <button v-on:click="closeModal">戻る</button>
            </div>
        </div>
        <h2>在室</h2>
        <table id="EnterList" align=center>
            <tr v-for="enterUser in enterUsers" :key="enterUser.name">
                <td><p><router-link :to="{name: 'User', params: {userId: enterUser.id}}"></router-link>{{ enterUser.name }}</p></td>
            </tr>
        </table>
        <h2>退室</h2>
        <table id="OutList" align=center>
            <tr v-show="!outUser.flag" v-for="outUser in users" :key="outUser.name">
                <td><p><router-link :to="{name: 'User', params: {userId: outUser.id}}">{{ outUser.name }}</router-link></p></td>
            </tr>
        </table>

        <div class="button"><router-link to="/room/history">履歴</router-link></div>

    </div>
</template>

<script>
import axios from 'axios'
const URL = 'https://api.dxcontest.sora210.dev'
axios.defaults.headers.common['Authorization'] = process.env.API_KEY

export default{
    data: function(){
        return {
            showContent: false,
            userID: '',
            mode: '',
            users: '',
            enterUsers: ''
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load: function(){
            axios.get(URL + '/users')
            .then(response => { this.users = response.data })
            .catch((error) => { console.log(error) })
            axios.get(URL + '/room')
            .then(response => { this.enterUsers = response.data })
            .catch((error) => { console.log(error) })

            // 在室の判定
            for (let user in this.users){
                if (!this.enterUser.find((v) => v.schoolId === user.schoolId)){
                    continue
                } else {
                    const targetUser = this.enterUser.find((v) => v.schoolId === user.schoolId)
                    targetUser.flag = true
                }
            }
        },
        openModal: function(mode){
            this.showContent = true
            this.mode = mode
        },
        enter: function() {
            axios.post(URL + '/room/' + this.userID, { status: 'in' })
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
            this.closeModal()
        },
        exit: function() {
            axios.post(URL + '/room/' + this.userID, { status: 'out' })
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
            this.closeModal()
        },
        closeModal: function() {
            this.showContent = false
            this.userID = ''
            this.mode = ''
        }

    }
}

</script>

<style scoped>
#overlay{
    /* 要素を重ねた時の順番 */
    z-index:1;

    /* 画面全体を覆う設定 */
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);

    /* 画面の中央に要素を表示させる設定 */
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
