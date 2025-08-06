import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import mockProducts from '../mocks/mockProducts';

jest.mock('../services/product', () => ({
  __esModule: true,
  default: () => Promise.resolve(mockProducts),
}));

window.matchMedia = jest.fn().mockReturnValue({ matches: true });

describe('App component', () => {
  beforeAll(async () => {
    jest.spyOn(Math, 'random').mockReturnValue(1);
  });

  it('When select options and press request recommendations button, should render the recommendations', async () => {
    render(<App />);

    const preference1 = await screen.findByRole('checkbox', {
      name: 'Personalização de funis de vendas',
    });
    const preference2 = await screen.findByRole('checkbox', {
      name: 'Integração fácil com ferramentas de e-mail',
    });
    const preference3 = await screen.findByRole('checkbox', {
      name: 'Automação de marketing',
    });

    const feature1 = await screen.findByRole('checkbox', {
      name: 'Automação de fluxos de trabalho de vendas',
    });
    const feature2 = await screen.findByRole('checkbox', {
      name: 'Gestão de leads e oportunidades',
    });

    userEvent.click(preference1);
    userEvent.click(preference2);
    userEvent.click(preference3);

    userEvent.click(feature1);
    userEvent.click(feature2);

    expect(preference1).toBeChecked();
    expect(preference2).toBeChecked();
    expect(preference3).toBeChecked();
    expect(feature1).toBeChecked();
    expect(feature2).toBeChecked();

    const recommendationType = await screen.findByRole('radio', {
      name: 'Múltiplos Produtos',
    });

    userEvent.click(recommendationType);

    expect(recommendationType).toBeChecked();

    const submitButton = await screen.findByRole('button', {
      name: 'Obter recomendação',
    });

    userEvent.click(submitButton);

    const recommendedProduct1 = await screen.findByText('RD Station CRM');

    const recommendedProduct2 = await screen.findByText('RD Station Marketing');

    expect(recommendedProduct1).toBeVisible();
    expect(recommendedProduct2).toBeVisible();
  });
});
