<template>
    <div>
        <h1>設定</h1>
        <h2>ユーザー新規登録</h2>
        名前：<input type="text" name="name">
        学籍番号：<input type="text" name="name">
        <button v-on:click="userEntry">登録</button>

        <h2>ユーザー更新</h2>
        名前：<input type="text" name="name">
        学籍番号：<input type="text" name="name">
        <button v-on:click="userUpdate">更新</button>

        <h2>ユーザー削除</h2>
        名前：<input type="text" name="name">
        学籍番号：<input type="text" name="name">
        <button v-on:click="userDelete">削除</button>
    </div>
</template>

<script>
export default{
    method: {
        userEntry: function(){
        },
        userUpdate: function(){
        },
        userDelete: function(){
        }
    }
}
</script>

<style scoped>

</style>
