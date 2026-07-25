// Priority of tasks

const demonstrateTasks = () => {
    console.log(`Synchronous 1`);
    queueMicrotask(() => console.log("Queue Microtask"));
    setTimeout(() => console.log("Timeout of 0 ms"), 0);
    console.log(`Synchronous 2`);
    process.nextTick(() => console.log("Next tick"));
    console.log(`Synchronous 3`);
}

demonstrateTasks();
