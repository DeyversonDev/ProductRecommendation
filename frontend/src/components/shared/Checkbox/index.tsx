import { Props } from './types';

function Checkbox({ children, ...props }: Props) {
  return (
    <label
      htmlFor={props.value as string}
      className="option-card cursor-pointer"
    >
      <input
        type="checkbox"
        className={`appearance-none h-5 w-5 border-2 border-gray-400 checked:bg-blue-500 checked:border-blue-500 checked:shadow-[inset_0_0_0_2px_white]
          ${props.type === 'radio' ? 'rounded-full' : 'rounded-md'}`}
        {...props}
      />

      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
