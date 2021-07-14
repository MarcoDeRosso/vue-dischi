<template>
    <div class="container">
        <div class="row">
            <Album class="albums-col" v-for="(album,index) in albums" 
            :key="index" 
            :poster="album.poster"
            :title="album.title"
            :author="album.author"
            :year="album.year"
            />
        </div>
    </div>
</template>

<script>
import Album from "./Album.vue"
export default {
    name:'Main',
    components:{
        Album
    },
    props:{
        albums:Array
    }
}
</script>

<style lang="scss" scoped>

    .container{
        .row{
            .albums-col{
            width: calc(100% / 5 - 24px);
            margin: 12px 12px;
            padding: 24px;
            }
        }
    }
</style>