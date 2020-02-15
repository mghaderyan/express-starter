

test('should return -1 when the value is not present', () => {
    expect([1, 2, 3].indexOf(5)).toBe(-1);
});

test('responds with matching records', async () => {
    const myPromise = Promise.resolve(3);

    const users = await myPromise;
    expect(users).toBe(3);
});