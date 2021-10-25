import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
  /*args: {
    title: 'Novo Teste',
    description: 'Teste Descrição 2'
  }*/
} as Meta

export const Basic: Story = (args) => <Main {...args} />
/*Basic.args = {
  title: 'Teste Título',
  description: 'Teste Descrição'
}*/

export const Default: Story = (args) => <Main {...args} />
