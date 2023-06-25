<script>
    import HeaderPanel from '../components/HeaderPanel.vue';
    export default {
        name: 'PanelLayout',
        components: { HeaderPanel }
    }
</script>

<template>
    <HeaderPanel/>
    <div class="panel-layout">
        <slot/>
    </div>
</template>

<style scoped>
    .panel-layout {
        width: 100%;
        display: flex;
        align-content: center;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
    }
</style>
