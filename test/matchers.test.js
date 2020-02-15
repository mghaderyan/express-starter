

test('the data is peanut butter', async () => {
    const fetchData = () => Promise.resolve('peanut butter');
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    const fetchData = () => Promise.reject('error')
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});