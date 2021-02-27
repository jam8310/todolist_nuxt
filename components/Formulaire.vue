<template>
  <div class="container">
    <form @submit.prevent="saveTodo">
      <input class="input" type="text" placeholder="Entrer votre tache"  v-model="item" required>
      <input type="submit" class="btn" value="+" >
    </form>
  </div>  
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'formaulaire',
  data() {
    return {
      item : ''
    }
  },
  methods: {
    ...mapActions({
      loadTodoStore : 'loadTodo',
      saveTodoStore : 'saveTodo'
      }),
    saveTodo() {
      this.saveTodoStore(this.item);
      this.item = '';
    }
  }
}
</script>

<style scoped>
.container{
  width:100%;
  height: 50px;
  margin: 0 auto;
  padding: 5px;
  background-color: #009688;
  box-shadow: 0 3px 2px #444;
}
form{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input{
  width:90%;
  height:40px;
  border: none;
  background-color: transparent;
  color: #fafafa;
  font-size:20px;
  outline: none;
}
.input::placeholder{
  color: #fafafa;
}
.btn{
  border: none;
  width:10%;
  height:40px;
  background-color: transparent;
  color: #fafafa;
  font-size: 22px;
  cursor: pointer;
  outline: none;
}
</style>