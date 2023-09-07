import ShoppingItem from '../ShoppingItem';

export default {
  title: 'Ejemplos/ShoppingItem',
  component: ShoppingItem,
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    color: 'red',
    image: "https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000",
    name: "Manzana",
    type: 'fruit',
    names: []
  }
};