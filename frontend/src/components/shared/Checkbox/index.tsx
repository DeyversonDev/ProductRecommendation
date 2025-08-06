import { Props } from './types';

function Checkbox({ children, type = 'checkbox', ...props }: Props) {
  const isRadio = type === 'radio';

  return (
    <label className="option-card cursor-pointer">
      <input
        type={type}
        role={type}
        className={`appearance-none h-5 w-5 border-2 border-gray-400 checked:bg-blue-500 checked:border-blue-500 checked:shadow-[inset_0_0_0_2px_white] dark:checked:shadow-[inset_0_0_0_2px_#282e34]
          ${isRadio ? 'rounded-full' : 'rounded-md'}`}
        aria-checked={props.checked}
        aria-label={typeof children === 'string' ? children : undefined}
        {...props}
      />

      <span className="ml-2 text-color">{children}</span>
    </label>
  );
}

export default Checkbox;
