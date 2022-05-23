import { html } from 'lit-html';
import '../src/banno-enterprise.js';

export default {
  title: 'BannoEnterprise',
  component: 'banno-enterprise',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <banno-enterprise
      style="--banno-enterprise-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </banno-enterprise>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
