<script setup lang="ts">
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import { useTasksStore } from '../stores/tasksStore';
    import Button from '../components/button/Button.vue';
    import Background from '../components/background/Background.vue';
    import AnswerOptions from '../components/answer-options/AnswerOptions.vue';
    import TaskContent from '../components/task-content/TaskContent.vue';
    import UserInfo from '../components/user-info/UserInfo.vue';
    import Modal from '../components/modal/Modal.vue';

    const isModalOpen = ref(false);

    const store = useTasksStore();

    /**
     * Asynchronous function to fetch task data from a JSON file and update the Vuex store.
     * 
     * @function fetchData
     * @async
     * @throws {Error} If there is an issue fetching or processing the data.
     * @returns {Promise<void>} A promise that resolves after updating the store.
     * 
     */
    const fetchData = async () => {
        try {
            const response = await axios.get('./src/data.json');
            const tasks = response.data?.tasks || [];
            
            store.setTasks(tasks);
            store.setCurrentTask(tasks[0] || null);
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
        }
    };

    /**
     * Function to check the selected answer, provide feedback through an alert,
     * and reset the selected answer in the Vuex store.
     * 
     * @function checkAnswer
     * @throws {Error} If there is an issue with the answer checking process.
     * @returns {void}
     * 
     */
    const checkAnswer = () => {
        if (!store.currentTaskUserAnswer) {
            alert(`Choose one option!`);
            return;
        }

        const isCorrect = store.currentTaskUserAnswer === store.currentTask?.correct_answer;
        const message = isCorrect ? `The answer is correct!` : `The answer is not correct! Try again!`;

        alert(message);
        store.selectAnswer(null);
    };

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

    /**
     * Lifecycle hook to trigger the fetchData function when the component is mounted.
     * This hook is used to initialize data fetching and store updates.
     * @function onMounted
     * @returns {void}
     * 
     */
    onMounted(fetchData);
</script>

<template>
    <Background>
        <div class="container-fluid h-100 d-flex flex-column">
            <div class="row pb-4"><UserInfo /></div>

            <div class="row align-items-center justify-content-between">
                <div class="col-auto pb-2">
                    <Button>
                        <img src="../assets/close_btn.png" alt="Close">
                    </Button>
                </div>
                <div class="col-sm-5 col-12 order-3 order-sm-2 text-center pb-2">
                    <span>{{ store.currentTask?.task_conditions.toUpperCase() }}</span>
                </div>
                <div class="col-auto order-2 order-sm-3 pb-2">
                    <Button @click="openModal">
                        <img src="../assets/bulb.png" alt="Tip">
                    </Button>
                </div>
            </div>

            <div class="row flex-grow-1"><TaskContent/></div>

            <div class="row">
                <AnswerOptions />
                <div class="col p-1">
                    <Button @click="checkAnswer">CHECK</Button>
                </div>
            </div>
        </div>
    </Background>
    <Modal :isOpen="isModalOpen" @modal-close="closeModal" />
</template>

<style scoped></style>