import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '..';

describe('Checkbox component', () => {
  const handleChange = jest.fn();

  it('uses the text as aria-label when it is a string', () => {
    render(
      <Checkbox value="opt1" onChange={handleChange}>
        Option 1
      </Checkbox>
    );

    const input = screen.getByRole('checkbox', { name: 'Option 1' });
    expect(input).toBeInTheDocument();
  });

  it('can be checked and unchecked', () => {
    render(
      <Checkbox value="opt2" onChange={handleChange}>
        Option 2
      </Checkbox>
    );

    const input = screen.getByRole('checkbox', { name: 'Option 2' });
    expect(input).not.toBeChecked();

    userEvent.click(input);
    expect(input).toBeChecked();

    userEvent.click(input);
    expect(input).not.toBeChecked();
  });

  it('calls onChange when clicked', () => {
    render(
      <Checkbox value="opt3" onChange={handleChange}>
        Option 3
      </Checkbox>
    );

    const input = screen.getByRole('checkbox', { name: 'Option 3' });
    userEvent.click(input);

    expect(handleChange).toHaveBeenCalled();
  });

  it('renders as radio when type is radio', () => {
    render(
      <Checkbox type="radio" value="r1" onChange={handleChange}>
        Radio 1
      </Checkbox>
    );

    const input = screen.getByRole('radio', { name: 'Radio 1' });
    expect(input).toBeInTheDocument();
  });

  it('uses aria-checked based on the checked prop', () => {
    render(
      <Checkbox value="opt4" checked onChange={handleChange}>
        Option 4
      </Checkbox>
    );

    const input = screen.getByRole('checkbox', { name: 'Option 4' });
    expect(input).toHaveAttribute('aria-checked', 'true');
  });
});
