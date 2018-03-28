<template>
    <div class="alert alert-secondary">
        <h3>Are you ready?</h3>
        <button class="btn btn-success"
                @click="$emit('onStart')"

        >start</button>
    </div>
</template>

<script>
    export default {
        methods: {

        }
    }

</script>

<style scoped>
    .alert{
        text-align: center;
    }

</style>