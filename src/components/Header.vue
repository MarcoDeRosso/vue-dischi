<template>
    <header class="py-3">
        <img src="../assets/spotify-logo.png" alt="spotify-logo">
    </header>
</template>

<script>
export default {
    name:'Header'
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