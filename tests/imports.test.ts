describe('import vue compents', () => {
    test('normal imports', async () => {
        const cmp = await import('../components/Fact.vue')
        expect(cmp).toBeDefined()
    })
})