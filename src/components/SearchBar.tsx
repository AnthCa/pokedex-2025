const SearchBar = ({onChange}: {onChange: (name: string) => void}) => {
  return (
      <div className="flex items-center gap-2 w-full hidden">
        <input 
          className="p-2 border border-gray-700 rounded-lg w-full text-blue-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="text" 
          placeholder="Charizard..." 
          onChange={(e) => onChange(e.target.value)} 
        />
      </div>
  )
}

export default SearchBar