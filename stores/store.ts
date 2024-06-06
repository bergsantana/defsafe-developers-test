export const useCatsStore = defineStore('fact', () => {
 
    const state = ref({fact : ''})

     
    function setCatFact(fact: string){
        state.value.fact = fact        
    }
    

    function getCatFact() {
        return state
    }


    return { state, setCatFact, getCatFact }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useCatsStore, import.meta.hot))
}