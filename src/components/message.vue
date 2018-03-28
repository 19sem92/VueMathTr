<template>
    <div class="alert" :class="'alert-'+ type">
        <h2>{{text}}</h2>
        <hr>
        <button class="btn btn-primary"
                @click="$emit('msgContinue')"
        >Continue</button>
    </div>
</template>

<script>
    export default {
        props: ['type', 'text']

    }

</script>

<style scoped>
    .alert{
        text-align: center;
    }
    .alert-error{
        background: #ff7f72;
    }

    h2, .btn{
        margin: 20px 0;
    }

</style>