import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision.vue';

describe('Indecision Component', () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: 'yes',
          forced: false,
          image:
            'https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif',
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, 'log');

    jest.clearAllMocks();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Escribir en el input no debe de disparar nada (console.log)', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');

    await input.setValue('Hola mundo');

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test('Escribir el simbolo de "?" debe de lanzar el getAnswer', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');

    await input.setValue('?');

    expect(clgSpy).toHaveBeenCalledTimes(2);
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test('Pruebas en getAnswer', async () => {
    await wrapper.vm.getAnswer();

    const img = wrapper.find('img');

    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.answer).toBe('Si!');
  });

  test('Pruebas en getAnswer - Fallo en el API', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));
    await wrapper.vm.getAnswer();

    const img = wrapper.find('img');

    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API');
  });
});
