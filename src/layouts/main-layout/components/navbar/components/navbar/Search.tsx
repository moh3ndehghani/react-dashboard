import { SearchTwoTone } from "@mui/icons-material";

const Search = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none text-gray-500">
        <SearchTwoTone />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-100 text-gray-900 text-sm rounded-lg transition-300 focus:ring-1 focus:ring-green-300 focus:border-green-300 block w-[200px] pl-10 p-2.5 outline-none "
      />
    </div>
  );
};

export default Search;
