<script lang="ts" setup>
import { useColorMode, useCycleList } from '@vueuse/core';

const mode = useColorMode({
    // emitAuto: true,
    modes: {
        contrast: 'dark contrast',
        cafe: 'cafe',
    },
});
const { next } = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'], {
    initialValue: mode,
});
</script>
<template>
    <section class="vueuse-box p-5 text-primary-dark dark:text-ternary-light">
        <h3 class="title font-bold">VueUse Example: ColorMode</h3>
        <el-button type="primary" @click="next()">
            <i
                v-if="mode === 'dark'"
                i-carbon-moon
                inline-block
                align-middle
                class="align-middle"
            />
            <i
                v-if="mode === 'light'"
                i-carbon-sun
                inline-block
                align-middle
                class="align-middle"
            />
            <i
                v-if="mode === 'cafe'"
                i-carbon-cafe
                inline-block
                align-middle
                class="align-middle"
            />
            <i
                v-if="mode === 'contrast'"
                i-carbon-contrast
                inline-block
                align-middle
                class="align-middle"
            />
            <i
                v-if="mode === 'auto'"
                i-carbon-laptop
                inline-block
                align-middle
                class="align-middle"
            />

            <span class="ml-2 capitalize">{{ mode }}</span>
        </el-button>
    </section>
</template>
<style lang="scss">
.vueuse-box {
    margin: 20px auto;
}

html.cafe {
    filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
html.contrast {
    filter: contrast(2);
}
</style>
