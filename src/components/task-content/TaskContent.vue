<script setup lang="ts">
    import { useTasksStore } from '../../stores/tasksStore';
    const store = useTasksStore();
</script>

<template>
    <div class="task-content text-center">
        <span>{{ store.currentTask?.task_text.toUpperCase() }}</span>
        <img class="task-img" :src="store.currentTask?.task_image" alt='Image is not found'>
    </div>
</template>

<style scoped>
    .task-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-size: 1.5em;
    }

    .task-img {
        max-width: 100vw;
        padding-top: 10px;
    }
</style>