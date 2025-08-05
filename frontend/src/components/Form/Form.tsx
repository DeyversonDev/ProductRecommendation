import { Options, RecommendationType } from './Fields';
import SubmitButton from './SubmitButton';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { useSession } from '../../contexts/useSession';

function Form() {
  const { setRecommendedProducts, products, preferences, features } =
    useSession();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    setRecommendedProducts(dataRecommendations);
  };

  return (
    <form className="mb-12 lg:grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
      <Options
        title="Preferências"
        options={preferences}
        selectedOptions={formData.selectedPreferences}
        onChange={(option) => handleChange('selectedPreferences', option)}
      />
      <Options
        title="Funcionalidades"
        options={features}
        selectedOptions={formData.selectedFeatures}
        onChange={(option) => handleChange('selectedFeatures', option)}
      />

      <div>
        <RecommendationType
          onRecommendationTypeChange={(option) =>
            handleChange('selectedRecommendationType', option)
          }
        />
        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
}

export default Form;
