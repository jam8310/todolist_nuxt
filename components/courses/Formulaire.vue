<template>
  <div class="container">
    <form @submit.prevent="saveTodo">
      <input class="input" type="text" placeholder="Entrer votre item"  v-model="item" required>
      <input class="price" type="number" step="0.01" placeholder="Prix" v-model="price" required>
      <input type="submit" class="btn" value="+" >
    </form>
  </div>  
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'formulaire',
  data() {
    return {
      item : '',
      price: '', 
      totalPrice: ''
    }
  },
  props: ['todos'],
  methods: {
    ...mapActions({
      loadTodoStore : 'courses/loadTodo',
      saveTodoStore : 'courses/saveTodo',
      totalPriceStore : 'courses/totalPrice'
      }),
    saveTodo() {  
      this.saveTodoStore({
          item: this.item,
          price: this.price
      });
      this.totalPriceStore(this.price);
      this.item = '';
      this.price = '';
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
  width:80%;
}
.price{
    width:10%;
}
.input, .price{
    height:40px;
  border: none;
  background-color: transparent;
  color: #fafafa;
  font-size:20px;
  outline: none;
}
.input::placeholder, .price::placeholder{
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