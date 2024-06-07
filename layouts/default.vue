<template>
    <div class="  h-screen">
        <header class=" h-[10vh] flex flex-col justify-center items-center text-2xl  lg:text-4xl bg-dark-gray  ">
            <h1 class="text-beige">THE DEFSAFE CAT FACTS PAGE</h1>
        </header>
        <div class="main-container ">
            <slot />
        </div>
    </div>
</template>

<style>
.main-container{
    height: 90vh  ;
    
    
}
</style>