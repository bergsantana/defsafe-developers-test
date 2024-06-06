export default defineEventHandler( async (event) => {

    const URL = 'https://meowfacts.herokuapp.com'

    const { data } = await $fetch<Promise<{data: string}>>(URL)
    return data[0]
})
