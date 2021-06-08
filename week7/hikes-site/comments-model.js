export const commentList = [
    {
    name: 'Bechler Falls',
    date: 'Sat Jun 05 2021 18:53:39',
    content: 'comment of Bechler Falls',
    },
    {
    name: 'Teton Canyon',
    date: 'Sat Jun 05 2021 18:54:41',
    content: 'comment of Teton Canyon Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:42',
    content: 'comment of Denanda Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:43',
    content: 'comment of Denanda Falls',
    },
    {
    name: 'Bechler Falls',
    date: 'Sat Jun 05 2021 18:54:44',
    content: 'comment of Bechler Falls',
    },
    {
    name: 'Teton Canyon',
    date: 'Sat Jun 05 2021 18:54:45',
    content: 'comment of Teton Canyon Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:46',
    content: 'comment of Denanda Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:47',
    content: 'comment of Denanda Falls',
    }
];

export function setComment(commentObject, key) {
    let oldList = JSON.parse(localStorage.getItem(key));
    if (oldList !== null) {
        oldList.push(newTask);
        localStorage.setItem(key, JSON.stringify(oldList));
        newTask.listTodos(key);
    } else {
        const toDoList = [];
        toDoList.push(newTask);
        localStorage.setItem(key, JSON.stringify(toDoList));
        newTask.listTodos(key);
    }
}
//export function getComment(key)
//array for comment storage
//save to lS