<script setup lang="ts"></script>

<template>
    <div class="background-container">
        <div class="background-stripes"></div>
        <div class="content"><slot></slot></div>
    </div>
  </template>
  
<style scoped>
    .background-container {
        width: 100vw;
        height: 100vh;
        position: relative;
    }
  
    .background-stripes {
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 1;
        transform: translateX(-50%);
        height: 100%;
        width: 80vw;
        background-image: repeating-linear-gradient(
            to right,
            rgb(255, 225, 225) 0 4%,
            white 4% 5%);
    }

    .content {
        position: absolute;
        top: 0;
        left: 10%;
        width: 80%;
        height: 100%;
        padding: 20px 20px;
        z-index: 2;
    }
</style>