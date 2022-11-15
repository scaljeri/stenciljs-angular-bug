import { newSpecPage } from '@stencil/core/testing';
import { WebLucas } from '../web-lucas';

describe('web-lucas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebLucas],
      html: `<web-lucas></web-lucas>`,
    });
    expect(page.root).toEqualHtml(`
      <web-lucas>
        <mock:shadow-root>

          <slot></slot>
        </mock:shadow-root>
      </web-lucas>
    `);
  });
});
