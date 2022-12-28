describe('server', () => {
    it('should return 200', () => {
        return request(server)
        .get('/hello')
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.body).toEqual("");
        });
    });
});