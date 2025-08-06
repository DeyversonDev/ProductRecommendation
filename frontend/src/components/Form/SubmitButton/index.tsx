import { Props } from './types';

function SubmitButton({ text }: Props) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-lg"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
