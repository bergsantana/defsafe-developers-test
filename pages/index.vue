<script setup lang="ts">
    useHead({
        title: 'DefSafe Cat Facts',
        meta: [
            { name: 'description', content: 'Cat Facts' }
        ]
    })
    
    const fetching = ref(false)

    const catStore = useCatsStore()

    const catFact = catStore.getCatFact()

    const getCatFact = async () => {
        fetching.value = true
        const req =  await $fetch('/api/meowfacts')
            .then((data) => { 
                (fetching.value = false ); return data
                }
            )
        return req
    }
    
    const fetchAndHydrate = async () => {
        const { data, refresh } = await useFetch('/api/meowfacts', {
        key: 'cat-facts',
        getCachedData: (key) => {
            const nuxt = useNuxtApp()
            if(nuxt.isHydrating && nuxt.payload.data[key]){
                return nuxt.payload.data[key] as string
            }

            if(nuxt.static.data[key]){
                return nuxt.static.data[key] as string
            }
            return null
        }
    })

    if(!data.value) {
        await refresh()
    }
        return data.value
    }

    catFact.value.fact = await fetchAndHydrate() ?? ''

    const updateFact = async () => catStore.setCatFact(await getCatFact())

     

</script>

<template>
    <div class="bg-light-brown h-full lg:flex ">
        <div class="p-4 lg:w-1/3 lg:px-20 lg:flex flex-col justify-center">
            <p class="text-dark-gray text-3xl lg:text-4xl lg:mb-12 font-medium">CAT FACT:</p> 
            <p :class="{['lg:my-16   mt-4   text-light-gray lg:text-3xl'] : true, ['fetching'] : fetching, ['fetched'] : true }">
                {{ catFact.fact  }}
            </p>
            <div class="my-4  flex justify-center">
                <v-btn   @click="updateFact" class="lg:mx-0 lg:w-11/12  " prepend-icon="mdi-reload" size="large" color="#4A4E69"> GET A RANDOM CAT FACT</v-btn>
            </div>
        </div>

        <div class="lg:flex lg:h-5/6 lg:self-center justify-center items-center  ">
            <div class="flex justify-center items-center lg:h-full lg:w-full  mb-2 ">
                <img class="rounded-xl h-80 lg:h-full w-auto lg:w-full" src="/images/kitty1.webp" alt="kitty-image-1" />
            </div>
            <div class="flex lg:flex-col justify-center gap-4  lg:gap-6 mt-0 lg:mt-0  lg:h-full lg:w-7/12 lg:pl-8">
                <img class="w-40 lg:w-96 rounded-xl" src="/images/kitty2.webp" alt="kitty-image-2" />
                <img class="w-40 lg:w-96 rounded-xl"  src="/images/kitty3.webp" alt="kitty-image-3" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.fetched {
    transition: all 0.4s;
}

.fetching {
    opacity: 0;
    filter: blur(1rem)
}
</style>