<script setup lang='ts'>
    // defineProps()

    // const emit = defineEmits<{
    //     (e: 'on-btn-click'): void
    // }>()

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
        <div class="p-4 lg:w-1/3 lg:px-20 lg:flex flex-col justify-center">
            <p class="text-dark-gray text-3xl lg:text-4xl lg:mb-12  font-medium">CAT FACT:</p> 
            <p :class="{
                ['lg:my-16 mt-4 text-light-gray lg:text-3xl  lg:max-h-[50vh]    factbox'] : true, 
                ['fetching'] : fetching, ['fetched'] : true }">
                {{ catFact.fact  }}
            </p>
            <div class="my-4  flex justify-center">
                <v-btn   @click="updateFact" class="lg:mx-0 lg:w-11/12  " prepend-icon="mdi-reload" size="large" color="#4A4E69"> GET A RANDOM CAT FACT</v-btn>
            </div>
        </div>
</template>

<style >
.factbox{
 
    overflow-y: scroll;
    scrollbar-width: none;
 

}
 
.factbox::-webkit-scrollbar{
    display: none;
 }

</style>