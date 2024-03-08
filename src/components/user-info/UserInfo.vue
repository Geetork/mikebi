<script setup lang="ts"></script>

<template>
    <div class="user-info">
        <span>Anton</span>
        <div class="user-coins">
            <span>1000</span>
            <img class="img" src="../../assets/coin.png" alt="coins">
        </div>
    </div>
</template>

<style scoped>
    .user-info {
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .user-coins {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .img {
        height: 20px;
    }
</style>