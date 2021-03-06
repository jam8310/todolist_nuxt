<template>
  <div class="container">
    <!-- <form @submit.prevent="saveTodo">
      <input class="input" type="text" placeholder="Votre site"  v-model="item" required>
      <input class="input" type="text" placeholder="Votre identifiant" autocomplete="off" v-model="email" required>
      <input class="input" type="text" placeholder="Votre mot de passe" v-model="mdp" required>
      <input type="submit" class="btn" value="+" >
    </form> -->
    <form @submit.prevent="saveTodo" class="mobile">
      <input class="input" type="text" placeholder="Votre site"  v-model="item" required>
      <input class="input" type="text" placeholder="Votre identifiant" autocomplete="off" v-model="email" required>
      <input class="input" type="text" placeholder="Votre mot de passe" v-model="mdp" required>
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
      email : '',
      mdp: ''
    }
  },
  methods: {
    ...mapActions({
      loadTodoStore : 'sites/loadTodo',
      saveTodoStore : 'sites/saveTodo'
      }),
    saveTodo() {
      this.saveTodoStore({
        item: this.item,
        email: this.email,
        mdp: this.mdp
      });
      this.item = '';
      this.email = '';
      this.mdp = '';
    }
  }
}
</script>

<style scoped>
.container{
  width:100%;
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
  width:30%;
  height:40px;
  border: none;
  background-color: transparent;
  color: #fafafa;
  font-size:20px;
  outline: none;
  padding: 0 5px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  margin: 0 7px;
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

@media screen and (max-width: 650px) {
  form{
    flex-direction: column;
  }
  .input{
    width:100%;
    margin-bottom: 5px;
  }
  
}
</style>