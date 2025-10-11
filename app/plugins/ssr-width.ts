import { provideSSRWidth } from '@vueuse/core';

export default defineNuxtPlugin(({ vueApp }) => provideSSRWidth(1024, vueApp));
