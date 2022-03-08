const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Tenemos una respuesta');
    }, 1000);
  });
};

//miPromesa().then(console.log);

const medirTiempo = async () => {
  try {
    console.log('Inicio');

    const res = await miPromesa();
    console.log(res);

    console.log('Fin');

    return 'Fin de medir tiempo';
  } catch (err) {
    throw 'Error en medir tiempo';
  }
};

medirTiempo()
  .then((valor) => console.log('THEN exitoso: ', valor))
  .catch((err) => console.log('Error: ', err));
