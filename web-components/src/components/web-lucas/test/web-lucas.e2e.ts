import { newE2EPage } from '@stencil/core/testing';

describe('web-lucas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-lucas></web-lucas>');

    const element = await page.find('web-lucas');
    expect(element).toHaveClass('hydrated');
  });
});
