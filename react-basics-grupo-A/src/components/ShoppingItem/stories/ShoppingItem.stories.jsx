import ShoppingItem from '../ShoppingItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ShoppingItem',
  component: ShoppingItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    color: 'red',
    image: "https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000",
    name: "Manzana",
    type: 'fruit',
  }
};