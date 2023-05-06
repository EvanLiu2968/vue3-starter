<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

userStore.initUser();
</script>
<template>
    <RouterView />
</template>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 150%;
}

.main {
    min-height: 500px;
}

.sw-msg {
    margin-top: 20px;
}
</style>
