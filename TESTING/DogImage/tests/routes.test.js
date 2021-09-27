describe('Endpoint', () => {
  test('should allow connection to Dog CEO', () => {
    expect(endpoint).toEqual("https://dog.ceo/api/breeds/image/random");
  });
});