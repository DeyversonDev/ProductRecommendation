import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionItem from '../';

describe('OptionItem component', () => {
  it('renders the option text inside Checkbox', () => {
    render(
      <OptionItem option="Option A" checked={false} onChange={jest.fn()} />
    );
    expect(
      screen.getByRole('checkbox', { name: 'Option A' })
    ).toBeInTheDocument();
  });

  it('calls onChange with the correct option when clicked', () => {
    const handleChange = jest.fn();

    render(
      <OptionItem option="Option B" checked={false} onChange={handleChange} />
    );

    const checkbox = screen.getByRole('checkbox', { name: 'Option B' });
    userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith('Option B');
  });

  it('respects the checked prop', () => {
    render(
      <OptionItem option="Option C" checked={true} onChange={jest.fn()} />
    );
    const checkbox = screen.getByRole('checkbox', { name: 'Option C' });
    expect(checkbox).toBeChecked();
  });

  it('memoizes to prevent unnecessary re-renders', () => {
    const { rerender } = render(
      <OptionItem option="Option D" checked={false} onChange={jest.fn()} />
    );

    const initialCheckbox = screen.getByRole('checkbox', { name: 'Option D' });

    rerender(
      <OptionItem
        option="Option With Name Changed"
        checked={false}
        onChange={jest.fn()}
      />
    );

    const afterRerenderCheckbox = screen.getByRole('checkbox', {
      name: 'Option D',
    });

    expect(afterRerenderCheckbox).toBe(initialCheckbox);
  });
});
