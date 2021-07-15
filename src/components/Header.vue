<template>
    <header class="d-flex justify-content-between py-3">
        <img src="../assets/spotify-logo.png" alt="spotify-logo">
        <select v-model="searchString" name="genre" @change="$emit('search', searchString)" class="me-2">
            <option value="">All</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Metal">Metal</option>
        </select>
    </header>
</template>

<script>
export default {
    name:'Header',
        data() {
        return {
            searchString: ''
        }
    },
        props:{
        albums:Array
    }
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";

    header{
        background: $grey-bg;
        margin-bottom: 48px;
        img{
            width: 75px;
        }
    }
</style>