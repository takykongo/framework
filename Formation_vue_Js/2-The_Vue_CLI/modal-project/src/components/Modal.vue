<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal title</h1>
            <p>modal content</p>
        </div>
    </div>    
</template>

<script>

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
</style>