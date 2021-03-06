export const state = () => ({
  todolistSite : []
});

export const mutations = {
  LOAD_TODO : (state) => {
      try{
          let todo = JSON.parse(localStorage.getItem('todolistSite'));
          state.todolistSite = todo;
      }catch{
          console.log(error);
      }  
      if(state.todolistSite === null || state.todolistSite === undefined){
          let todos = [];
          let createTodo = JSON.stringify(todos);
          localStorage.setItem('todolistSite', createTodo);
          let newTodo = JSON.parse(localStorage.getItem('todolistSite'));
          state.todolistSite = newTodo;
       }
  },
  SAVE_LOCAL : (state) =>{
      let data = JSON.stringify(state.todolistSite);
      localStorage.setItem('todolistSite', data);
  },
  SAVE_TODO : (state, { item, email, mdp }) => {
      state.todolistSite.push({
          "text": item,
          "email" : email,
          "mdp" : mdp,
          "checked": false
      });
  },
  DEL_TODO : (state, index) => {
    state.todolistSite.splice(index,1);
    let data = JSON.stringify(state.todolistSite);
    localStorage.setItem('todolistSite', data);
  },
  CHECKED_TODO : (state, index) => {
    if(state.todolistSite[index].checked == false) {
      state.todolistSite[index].checked = true;
    }else {
      state.todolistSite[index].checked = false;
    }
  },
  NEW_ITEM : (state, value) => {
      state.todolistSite[value.index].text = value.item;
      state.todolistSite[value.index].email = value.email;
      state.todolistSite[value.index].mdp = value.mdp;
  }
  
};

export const actions = {
  loadTodo : (state) =>{
      state.commit('LOAD_TODO');
  },
  saveTodo : (state, { item, email, mdp }) => {
    state.commit('SAVE_TODO', { item , email, mdp });
    state.commit('SAVE_LOCAL');
  },
  delTodo : (state, index) => {
    state.commit('DEL_TODO', index);
    state.commit('SAVE_LOCAL');
  },
  checkedTodo : (state, index)=> {
    state.commit('CHECKED_TODO', index);
    state.commit('SAVE_LOCAL');
  },
  newItem : (state, value) => {
      state.commit('NEW_ITEM', value);
      state.commit('SAVE_LOCAL');
  }
  
}
