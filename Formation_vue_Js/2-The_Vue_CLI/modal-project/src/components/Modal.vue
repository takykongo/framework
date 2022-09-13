<template>
    <div @click.self="closeModal" class="backdrop">
        <div class="modal" :class="{sale: theme === 'sale', dark: theme === 'dark'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>    
</template>

<script>
    export default{
        props: ['theme'],
        methods: {
            closeModal(){
                this.$emit('close') 
            }
  }
    }
</script>

<style>
    .modal{
        width: 400px;
        padding: 50px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .modal h1{
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal p{
        font-style: normal;
    }
    .modal .actions{
        text-align: center;
        margin: 30 px 0 10px 0;
        color: #333;
    }
    .modal .actions a{
        padding: 8px;
        color: #333;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale{
        background: crimson;
        color: white;
    }
    .modal.sale h1{
        color: white;
    }
    .modal.sale .actions{
        color: white;
    }
    .modal.sale .actions a  {
        color: white;
    }
    .modal.dark{
        background: #111;
        color: white;
    }
    .modal.dark h1{
        color: white;
    }
</style>