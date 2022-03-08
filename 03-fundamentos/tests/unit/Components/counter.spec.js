import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter component', () => {
  let wrapper;

  // -- Forma de reutilizar el wrapper
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  /* test('debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */

  test('h2 debe tener el valor por defecto "Counter"', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
    const h2 = wrapper.find('h2');
    expect(h2.text()).toBe('Counter');
  });

  test('el valor por defecto debe ser 100 en el p', () => {
    // const p = wrapper.findAll('p');
    // expect(p[1].text()).toBe('100');
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('100');
  });

  test('Debe incrementar y decrementar el valor del contador', async () => {
    // -- Destructuración de la lista
    const [decreaseBtn, increaseBtn] = wrapper.findAll('button');

    await decreaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');

    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('101');
  });

  // -- Testeando props
  test('debe de establecer el valor por defecto', async () => {
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  // -- Testeando envio de proposa
  test('debe mostrar la prop title', () => {
    const title = 'Hola mundo';
    // -- envio de props
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });

    expect(wrapper.find('h2').text()).toBe(title);
  });
});
