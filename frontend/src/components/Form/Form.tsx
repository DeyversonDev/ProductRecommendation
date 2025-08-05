import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
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

  const onPreferenceChange = (
    selected: (typeof formData)['selectedPreferences']
  ) => handleChange('selectedPreferences', selected);

  const onFeatureChange = (selected: string[]) =>
    handleChange('selectedFeatures', selected);

  const onRecommendationTypeChange = (
    selected: (typeof formData)['selectedRecommendationType']
  ) => handleChange('selectedRecommendationType', selected);

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={onPreferenceChange}
      />
      <Features features={features} onFeatureChange={onFeatureChange} />
      <RecommendationType
        onRecommendationTypeChange={onRecommendationTypeChange}
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
