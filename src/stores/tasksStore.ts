import { defineStore } from 'pinia';

export type TTask = {
    id: string,
    task_text: string,
    task_conditions: string,
    task_image: string,
    correct_answer: string,
    answer_options: string[]
};

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [] as TTask[],
        currentTask: null as TTask | null,
        currentTaskUserAnswer: null as string | null,
    }),
    getters: {
        getTasks: (state) => state.tasks,
        getCurrentTask: (state) => state.currentTask,
        getTaskById: (state) => (taskId: string) =>
            state.tasks.find((task) => task.id === taskId),
    },
    actions: {
        setTasks(tasks: TTask[]) {
            this.tasks = tasks;
        },
        setCurrentTask(task: TTask) {
            this.currentTask = task;
        },
        selectAnswer(option: string | null) {
            this.currentTaskUserAnswer = option;
        },
    },
});