<script setup lang="ts">
    import { defineProps, defineEmits, ref } from "vue";
    import { onClickOutside } from '@vueuse/core';

    const props = defineProps({
        isOpen: Boolean,
    });

    const target = ref(null);

    const emit = defineEmits(["modal-close"]);
    onClickOutside(target, ()=>emit('modal-close'));
</script>

<template>
    <div v-if="isOpen" class="modal-mask">
        <div class="modal-container" ref="target">
            <div class="modal-header">
                <img @click.stop="emit('modal-close')"
                    class="img"
                    src="../../assets/close_btn.png" alt="Close"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-container {
        width: 50%;
        height: 50%;
        min-width: 250px;
        min-height: 250px;
        max-width: 100%;
        max-height: 100%;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .modal-header {
        display: flex;
        justify-content: flex-end;
    }

    .img {
        cursor: pointer;
    }
</style>