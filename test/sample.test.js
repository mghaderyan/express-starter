
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1, 2, 3].indexOf(5)).toBe(-1);

        });
    });
});

describe('#async()', function() {
    it('responds with matching records', async function() {
        const myPromise = Promise.resolve(3);

        const users = await myPromise
        expect(users).toBe(3);

    });
});