<template>
  <div class="container">
    <Modale :revele="revele" :item="item" :email="email" :mdp="mdp" :index="index" @newitem="newItem" />
    <ul v-for="(todo, index) in todos" :key="index">
      <li>
        <div class="element" v-if="!todo.checked">
          {{ todo.text }} 
          <div class="align">
            <button class="btn green" type="button" @click="checked(index)">
              <img src="../../assets/img/chevronDown.svg" alt="">
            </button>
            <button class="btn" type="button" @click="modif(index)">&#9998;</button>
            <button class="btn red" type="button" @click="del(index)">&#10008;</button>
          </div>
        </div>
        <div v-else>
          <div class="element">
          {{ todo.text }} 
          <div class="align">
            <button class="btn green" type="button" @click="checked(index)">
              <img src="../../assets/img/chevronUp.svg" alt="">
            </button>
            <button class="btn" type="button" @click="modif(index)">&#9998;</button>
            <button class="btn red" type="button" @click="del(index)">&#10008;</button>
          </div>
        </div>
        <div class="elements">
          <b>Identifiant:</b> {{ todo.email }} <br>
         <b> Mdp:</b> {{ todo.mdp }}

        </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Modale from '@/components/sites/ModaleSites'
import { mapActions } from 'vuex'

export default {
  name: "ListeSites",
  data() {
    return {
      revele: false,
      item: '',
      email: '',
      mdp: '',
      index: ''
    }
  },
  props: ['todos'],
  components: {
    Modale
  },
  methods: {
    ...mapActions({
      newItemStore : 'sites/newItem',
      delTodoStore : 'sites/delTodo',
      modifTodoStore : 'sites/modifTodo',
      checkedTodoStore : 'sites/checkedTodo'
    }),
    newItem(value) {
      this.newItemStore(value);
    },
    del(index) {
      this.delTodoStore(index);
    },
    modif(index) {
      this.item = this.$store.state.sites.todolistSite[index].text;
      this.email = this.$store.state.sites.todolistSite[index].email;
      this.mdp = this.$store.state.sites.todolistSite[index].mdp;
      this.index = index;
      this.revele = true;
    },
    checked(index) {
      this.checkedTodoStore(index);
    }
  }
}
</script>

<style scoped>
.container{
  padding-top: 20px;
}
li{
  line-height:20px;
  list-style-type: none;
  align-items: center;
  box-shadow: 0px 1px 5px #999;
  border-radius:3px;
  padding: 10px;
  margin-bottom: 5px;
}
.element{
  display: flex;
  justify-content: space-between;
}
.elements{
  padding-top:10px;
}
.align{
  display: flex;
  align-items: center;
}
.btn{
  line-height:20px;
  font-size:18px;
  width:20px;
  height:20px;
  cursor: pointer;
  border: none;
  background-color:transparent;
  outline: none;
  margin-right:3px;
}
.btn img{
  width:20px;
  height:20px;
  padding: 2px 0;
}
.red{
  color: crimson;
}
.green{
  color: green;
}
.blue {
  color: rgb(72, 161, 209);
}
.barre{
  text-decoration: line-through;
  background-color:#e8e8e8;
}
.fondBarre{
  background-color: rgb(232, 232, 232);
}
</style>