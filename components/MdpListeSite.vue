<template>
    <div class="container" v-if="affiche">
        <div class="overlay"></div>
        <div class="modale">
            <form class="form">
                <label for="mdp">Entrer votre mot de passe !</label>
                <input type="text" id="mdp" />
                <button class="btn" type="submit" @click.prevent="verif">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MdpListeSite',
    props: ['revele'],
    data(){
        return {
            affiche : this.revele
        }
    },
    methods: {
        verif(event) {
            let result = event.target.form[0].value;

            if(result === 'ok'){
                this.affiche = false;
            }
        }
    }
}
</script>

<style scoped>
.overlay{
    position: fixed;
    top:48px; bottom:0; left:0; right:0;
    background-color: rgba(0,0,0,0.5);
}
.modale{
    position:absolute;
    top:40%;left:50%;
    transform: translate(-50%, -50%);
    border: 1px solid #333;
    width:80%;
    max-width:400px;
    padding: 20px;
    border-radius:10px;
    background-color:#f1f1f1;
}
.form{
    position:relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px;
}
label{
    display:block;
    text-align: center;
    padding: 5px 0;
}
input, .btn{
    border: none;
    padding: 5px;
    border: 1px solid #999;
    border-radius: 3px;
}
input{
    margin: 10px 0;
}
.btn{
    width:100px;
    position: absolute; 
    right:0; bottom: 0;
}
</style>