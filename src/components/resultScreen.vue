<template>
    <div class="alert alert-primary">
        <h3>Success: {{stats.success}}</h3>
        <h3>Error: {{stats.error}}</h3>
        <hr>

        <button class="btn primary"
                @click="$emit('repeat')"
        >Repeat</button>

        <button class="btn primary"
                @click="$emit('nextLevel')"
        >next Level</button>
    </div>

</template>

<script>
    export default{
        props: ['stats']
    }

</script>

<style>

</style>