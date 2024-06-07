<template>
    <div class="  h-screen">
        <header class="flex flex-col justify-center items-center text-2xl   bg-dark-gray h-16  ">
            <h1 class="text-beige">THE DEFSAFE CAT FACTS PAGE</h1>
        </header>
        <div class="main-container h-full">
            <slot />
        </div>
    </div>
</template>

<style>
.main-container{
    overflow: scroll;
}
</style>