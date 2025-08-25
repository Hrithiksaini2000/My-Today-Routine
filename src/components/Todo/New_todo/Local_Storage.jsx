const New_todo_key = "React_New_Todo"

export const Localstorage_getitem = () => {
    const newrow = localStorage.getItem(New_todo_key)
    if (!newrow) {
        return [];
    }
    return JSON.parse(newrow)
}

export const Localstoragesetitem = (task) => {
    return localStorage.setItem(New_todo_key, JSON.stringify(task))
}