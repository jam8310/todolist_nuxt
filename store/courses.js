export const state = () => ({
    todolistCourse : [],
    totalPrice: 0,
    totalArticle : 0
});

export const mutations = {
    LOAD_TODO : (state) => {
        try{
            let todo = JSON.parse(localStorage.getItem('todolistCourse'));
            state.todolistCourse = todo;
        }catch{
            console.log(error);
        }  
        if(state.todolistCourse === null || state.todolistCourse === undefined){
            let todos = [];
            let createTodo = JSON.stringify(todos);
            localStorage.setItem('todolistCourse', createTodo);
            let newTodo = JSON.parse(localStorage.getItem('todolistCourse'));
            state.todolistCourse = newTodo;
         }
    },
    SAVE_LOCAL : (state) =>{
        let data = JSON.stringify(state.todolistCourse);
        localStorage.setItem('todolistCourse', data);
    },
    SAVE_TODO : (state, { item, price }) => {
        state.todolistCourse.push({
            "text": item,
            "price" : price,
            "checked": false
        });
    },
    DEL_TODO : (state, index) => {
        state.todolistCourse.splice(index,1);
        let data = JSON.stringify(state.todolistCourse);
        localStorage.setItem('todolistCourse', data);
    },
    CHECKED_TODO : (state, index) => {
        if(state.todolistCourse[index].checked == false) {
            state.todolistCourse[index].checked = true;
          }else {
            state.todolistCourse[index].checked = false;
          }
    },
    NEW_ITEM : (state, value) => {
        state.todolistCourse[value.index].text = value.item;
        state.todolistCourse[value.index].price = value.price;
    },
    TOTAL_PRICE : (state) => {
        state.totalPrice = 0;
        for(let i=0; i < state.todolistCourse.length;i++){
            if(!state.todolistCourse[i].checked){
                state.totalPrice = parseFloat(state.totalPrice) + parseFloat(state.todolistCourse[i].price);
            }        
        }
    },
    TOTAL_ARTICLE : (state) => {
        state.totalArticle = 0;
        let checked = 0;
        for(let i=0; i < state.todolistCourse.length;i++){
            if(state.todolistCourse[i].checked){
                checked++;
            }        
        }
        state.totalArticle = state.todolistCourse.length - checked;
    }
};

export const actions = {
    loadTodo : (state) =>{
        state.commit('LOAD_TODO');
        state.commit('TOTAL_PRICE');
        state.commit('TOTAL_ARTICLE');
    },
    saveTodo : (state, { item, price }) =>{
        console.log(item, price);
        state.commit('SAVE_TODO', {item, price});
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
    },
    total : (state) => {
        state.commit('TOTAL_PRICE');
        state.commit('TOTAL_ARTICLE')
    }
}
