<script setup lang="ts">
    import { useTasksStore } from '../../stores/tasksStore';

    const store = useTasksStore();
    const selectAnswer = (option: string | null) => {
        store.selectAnswer(option);
    };
</script>

<template>
    <div class="button col p-1" v-for="(option, index) in store.currentTask?.answer_options" :key="index">
      <label 
        :class="['button-lable', {'active': store.currentTaskUserAnswer === option }]"
        @click="selectAnswer(option)">
        <input
          type="radio"
          v-model="store.currentTaskUserAnswer"
          :value="option"
          name="options"
          class="button-radio-input"
        />
        <span class="button-radio-text">{{ option }}</span>
      </label>
    </div>
  </template>
  
  <style scoped>
    .button {
        box-sizing: border-box;
        padding: 0;
    }

    .button-radio-input {
        display: none;
    }
  
    .button-lable {
        box-sizing: border-box;
        width: 100%;
        min-height: 3em;
        min-width: 3em;
        background-color: rgba(255, 243, 243, 0.5);
        border: none;
        border-radius: 8px;
        box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-lable:hover,
    .active {
        background-color: rgba(233, 204, 204, 0.5);
    }
  </style>