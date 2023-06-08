import { IconSearch } from "../Icon";

const Search = () => (
  <form className="relative" action="/bat-dong-san-ban" method="GET">
    <input
      type="text"
      name="query"
      id="query"
      className="w-full rounded-lg px-4 py-4 outline-none ring-2 ring-gray-200 focus:ring-encacap-main md:px-5"
      placeholder="Nhập từ khoá để tìm kiếm..."
    />
    <button
      type="submit"
      className=" absolute right-3 top-3 flex items-center rounded-md bg-encacap-main px-4 py-1 text-white duration-200 hover:bg-yellow-600"
    >
      <IconSearch className="mr-2 w-4" />
      Tìm
    </button>
  </form>
);

export default Search;
