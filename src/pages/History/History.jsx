import { useEffect, useState } from "react";
import {
  getSearchHistory,
  deleteHistory,
  clearHistory
} from "../../services/historyService";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Trash2
} from "lucide-react";
function History() {
const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);
  const [searchTerm, setSearchTerm] =
  useState("");
  const filteredHistory =
  history.filter(item =>
    item.query
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )
  );
const handleSearchAgain = (query) => {

  navigate("/", {
    state: {
      searchQuery: query
    }
  });

};
  const fetchHistory = async () => {

    try {

      const data = await getSearchHistory();

      setHistory(data);

    } catch (error) {

      console.error(error);

    }
  };const handleDelete =
  async (id) => {

    try {

      await deleteHistory(id);

      fetchHistory();

    } catch (error) {

      console.error(error);

    }
};

const handleClearAll =
  async () => {

    try {

      await clearHistory();

      setHistory([]);

    } catch (error) {

      console.error(error);

    }
};

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">
<div className="mb-8">

  <h1 className="text-5xl font-bold mb-6">
    Search History
  </h1>

  <div className="relative">

    <Search
      size={20}
      className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      text-slate-400
      "
    />

    <input
      type="text"
      placeholder="Search history..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      className="
      w-full
      pl-12
      pr-4
      py-3
      rounded-2xl
      bg-slate-900
      border
      border-slate-800
      outline-none
      focus:border-cyan-500
      transition
      "
    />

  </div>

</div>
{filteredHistory.length === 0 ? (

<div
className="
flex
flex-col
items-center
justify-center
min-h-[60vh]
text-center
"
>

  <div className="text-7xl mb-6">
    🔍
  </div>

  <h2 className="text-3xl font-bold mb-2">
    {history.length === 0
      ? "No Search History"
      : "No Matching Searches"}
  </h2>

  <p className="text-slate-400">
    {history.length === 0
      ? "Your searches will appear here."
      : "Try searching with a different keyword."}
  </p>

</div>

) : (
    <div className="grid gap-6">

      {filteredHistory.map((item) => (

        <div
          key={item.id}
          className="
          bg-slate-900
          border border-slate-800
          rounded-2xl
          p-6
          hover:border-blue-500/40
          hover:shadow-lg
          hover:shadow-blue-500/10
          transition
          duration-300
          "
        >

          <div
className="
flex
justify-between
items-start
"
>
<div
onClick={() =>
  handleSearchAgain(item.query)
}
className="
flex
items-center
gap-3
cursor-pointer
"
>

  <Search
    size={20}
    className="text-cyan-400"
  />

  <h3
  className="
  text-lg
  font-semibold
  "
  >
    {item.query}
  </h3>

</div>

            <button
onClick={() =>
  handleDelete(item.id)
}
className="
p-2
rounded-lg
bg-red-500/10
text-red-400
hover:bg-red-500
hover:text-white
transition
"
>
  <Trash2 size={18} />
</button>

          </div>

          <p className="text-slate-400 mt-3 text-sm">
            {new Date(item.searchedAt).toLocaleString()}
          </p>

        </div>

      ))}

    </div>

  )}

</div>

  );
}

export default History;