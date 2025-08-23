const todokey = "ReactADDTodo"

export const Localstoragegetitem = () =>{
        const rawtodos = localStorage.getItem(todokey)
        if(!rawtodos){
            return []
        }
       return JSON.parse(rawtodos)
}

export const Locatstoragesetitem = (task) =>{
    return localStorage.setItem(todokey, JSON.stringify(task))
}