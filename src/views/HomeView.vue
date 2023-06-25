<script>

    import { RouterLink } from 'vue-router';

    export default {
        name: 'HomeView',
        component: { RouterLink }
    }
</script>

<template>
    <div class="home-view-container">
        <h2 class="home-view-logo">{ }</h2>
        <h3 class="home-view-title">Tasks Management</h3>
        <p class="home-view-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, quis.</p>
        <div class="home-view-links">
            <RouterLink class="link-button" to="/login">Login</RouterLink>
            <RouterLink class="link-button outline" to="/signup">Sign Up</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .home-view-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    .home-view-logo {
        font-size: 30px;
        font-weight: bold;
        color: var(--primary-color);
    }

    .home-view-title {
        font-size: 20px;
    }

    .home-view-description {
        text-align: center;
        width: 80%;
        line-height: 25px;
    }

    .home-view-links {
        display: flex;
        align-items: center;
        gap: 10px
    }
</style>
