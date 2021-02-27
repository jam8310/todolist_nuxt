export const state = () => ({
    todolist : []
});

export const mutations = {
    LOAD_TODO : (state) => {
        try{
            let todo = JSON.parse(localStorage.getItem('todolist'));
            state.todolist = todo;
        }catch{
            console.log(error);
        }  
        if(state.todolist === null || state.todolist === undefined){
            let todos = [];
            let createTodo = JSON.stringify(todos);
            localStorage.setItem('todolist', createTodo);
            let newTodo = JSON.parse(localStorage.getItem('todolist'));
            state.todolist = newTodo;
         }
    },
    SAVE_LOCAL : (state) =>{
        let data = JSON.stringify(state.todolist);
        localStorage.setItem('todolist', data);
    },
    SAVE_TODO : (state, item) => {
        state.todolist.push({
            "text": item,
            "checked": false
        });
    },
    DEL_TODO : (state, index) => {
        state.todolist.splice(index,1);
        let data = JSON.stringify(state.todolist);
        localStorage.setItem('todolist', data);
    },
    CHECKED_TODO : (state, index) => {
        if(state.todolist[index].checked == false) {
            state.todolist[index].checked = true;
          }else {
            state.todolist[index].checked = false;
          }
    },
    NEW_ITEM : (state, value) => {
        state.todolist[value.index].text = value.item;
    }
};

export const actions = {
    loadTodo : (state) =>{
        state.commit('LOAD_TODO');
    },
    saveTodo : (state, item) =>{
        state.commit('SAVE_TODO', item);
        state.commit('SAVE_LOCAL');
    },
    delTodo : (state, index) => {
        state.commit('DEL_TODO', index);
        state.commit('SAVE_LOCAL');
    },
    checkedTodo : (state, index) => {
        state.commit('CHECKED_TODO', index);
        state.commit('SAVE_LOCAL');
    },
    newItem : (state, value) => {
        state.commit('NEW_ITEM', value);
        state.commit('SAVE_LOCAL');
    }
}
