<script>
    export default {
        name: "HeaderPanel"
    }
</script>

<template>
    <header class="header-panel">
        <h2 class="header-panel-title">
            <span>{ }</span>
            YourTasks
        </h2>
        <div class="header-panel-user">
            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="">
            <h3>Andrea Valtierra</h3>
            <button class="button">Exit</button>
        </div>
    </header>
</template>

<style scoped>
    .header-panel {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 20px;
        background-color: var(--background-secondary-color);
    }

    .header-panel-title {
        font-size: 20px;
    }

    .header-panel-title span {
        color: var(--primary-color);
        display: inline-flex;
        align-items: center;
        font-weight: bold;
    }

    .header-panel-user {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .header-panel-user h3 {
        font-size: 13px;
    }

    .header-panel-user img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: cover;
    }
</style>
