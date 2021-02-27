<template>
    <div class="overlay" v-if="revele">
        <div class="modale">
        <span>Veuillez corriger votre item !</span>
        <form class="form">
            <input type="text" :value="item">
            <input type="submit" class="btn" @click="modif" value="Enregistrer">
        </form>
    </div>
    </div>
    
</template>

<script>
export default {
    name: 'Modale',
    props:['revele', 'item', 'index'],
    methods: {
        modif(event) {
            let data = {
                item : event.target.form[0].value,
                index: this.index
            };
            this.$emit('newitem', data )
        }
    }

}
</script>

<style scoped>
.overlay{
    position: fixed;
    top:0; bottom:0; left:0; right:0;
    background-color: rgba(0,0,0,0.5);
}
.modale{
    position: fixed;
    top:30%;left:50%;
    transform: translate(-50%, -50%);
    border: 1px solid #333;
    width:80%;
    max-width:400px;
    padding: 20px;
    border-radius:10px;
    background-color:#f1f1f1;
}
span{
    width: 100%;
}
.form{
    position:relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px;
}
input{
    border: none;
    padding: 5px;
    border: 1px solid #999;
    border-radius: 3px;
}
input:first-child{
    margin-bottom: 10px;
}
.btn{
    width:100px;
    position: absolute; 
    right:0; bottom: 0;
}
</style>