<script setup></script>

<template>
    <button class='button'>
        <slot></slot>
    </button>
</template>

<style scoped>
    .button {
        display: inline-block;
        box-sizing: border-box;
        width: auto;
        min-height: 3em;
        min-width: 3em;
        width: 100%;
        background-color: rgba(255, 243, 243, 0.5);
        border: none;
        border-radius: 8px;
        box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    .button:hover {
        background-color: rgba(233, 204, 204, 0.5);
    }
</style>