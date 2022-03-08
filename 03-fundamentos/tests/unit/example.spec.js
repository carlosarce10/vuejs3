describe('Example component', () => {
  test('Debe de ser mayor a 10', () => {
    //Arreglar
    let value = 5;

    //Accion
    value = value + 22;

    //Resultado
    expect(value).toBeGreaterThan(10);
  });
});
