import { typesPokemons } from '../consts/typesPokemons';

const FilterType = ({
  onTypeSelect,
  selectedType
}: {
  onTypeSelect: (type: string) => void;
  selectedType: string | null;
}) => {
  return (
    <div className="container max-w-screen-lg mr-auto p-4 bg-black-800 w-2/3">
    <div className="flex gap-0 flex-wrap">
      {typesPokemons.map((type) => (
        <button
          key={type}
          onClick={() => onTypeSelect(type)}
          className={`cursor-pointer hover:[&>img]:grayscale-0 hover:[&>img]:scale-110 hover:[&>img]:opacity-100 hover:[&>img]:transition-all hover:[&>img]:duration-300 transition-all duration-300`}
        >
          <img
            src={`/icons/types/${type}.svg`}
            alt={type}
            className={`size-15 ${selectedType === type ? 'scale-110 transition-all duration-300 grayscale-0' : 'grayscale-100 opacity-50 transition-all duration-300'}`}
          />
        </button>
      ))}
    </div>
    </div>
  );
};

export default FilterType