<script setup lang="ts">
    useHead({
        title: 'DefSafe Cat Facts',
        meta: [
            { name: 'description', content: 'Cat Facts' }
        ]
    })
    

</script>

<template>
    <div class="bg-light-brown min-h-[90vh] max-h-fit lg:flex  indexcontainer">
        <Fact />

        <div class="lg:grid lg:grid-cols-[1fr_1fr] lg:h-[75vh] lg:ml-36 lg:mt-8 justify-center items-center   ">
            <div class="  flex justify-center items-center    mb-2  ">
                <img class="rounded-xl h-80 lg:h-full  w-auto lg:w-full" src="/images/kitty1.webp" alt="kitty-image-1" />
            </div>
            <div class="  flex lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:h-[inherit]  lg:py-12   lg:pl-11 justify-center gap-4    mt-0    ">
                <img class="w-40 lg:w-auto lg:h-full rounded-xl" src="/images/kitty2.webp" alt="kitty-image-2" />
                <img class="w-40  lg:w-auto lg:h-full  rounded-xl"  src="/images/kitty3.webp" alt="kitty-image-3" />
            </div>
        </div>
    </div>
</template>

<style >
html {
    overflow: hidden;
}

body {
    overflow:  scroll;
    scrollbar-width: none;
}

.fetched {
    transition: all 0.4s;
}

.fetching {
    opacity: 0;
    filter: blur(1rem)
}

 
 

</style>