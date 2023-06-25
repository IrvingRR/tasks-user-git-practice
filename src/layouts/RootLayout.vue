<script>
    export default {
        name: 'RootLayout'
    }
</script>

<template>
    <div class="root-layout">
        <slot/>
    </div>
</template>

<style scoped>
    .root-layout{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
