import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-my-button>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-my-button></sl-my-button> `);

    expect(el).to.exist;
  });
});
