import { useEffect, useState } from "react";
import {
  getWishlist,
  deleteWishlist
} from "../../services/wishlistService";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {

    try {

      const data = await getWishlist();

      setWishlist(data);

    } catch (error) {

      console.error(error);
    }
  };

  const handleDelete = async (id) => {

    try {

      await deleteWishlist(id);

      fetchWishlist();

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
      p-8
      "
    >

      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Wishlist ❤️
      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >

        {wishlist.length === 0 ? (

          <div
            className="
col-span-full
flex
flex-col
items-center
justify-center
min-h-[60vh]
text-center
"
          >

            <div className="text-7xl mb-6 animate-pulse">
  ❤️
</div>

            <h2 className="text-3xl font-bold mb-2">
              Wishlist Empty
            </h2>

            <p className="text-slate-400">
              Save products to your wishlist and they will appear here.
            </p>

          </div>

        ) : (

          wishlist.map(item => (

            <div
              key={item.id}
              className="
              bg-slate-900
              border border-slate-800
              rounded-3xl
              p-6
              flex flex-col
              h-[500px]
              hover:border-blue-500/40
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-blue-500/10
              transition-all
              duration-300
              "
            >

              <h2
                className="
                text-xl
                font-bold
                text-cyan-400
                "
              >
                {item.query}
              </h2>

              <p className="text-slate-500 text-sm mt-2">
                {new Date(item.createdAt).toLocaleString()}
              </p>

              <div
                className="
                mt-4
                text-slate-300
                whitespace-pre-wrap
                max-h-72
                overflow-y-auto
                pr-2
                "
              >
                {item.recommendation}
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="
                mt-auto
                self-end
                px-5
                py-2
                rounded-xl
                bg-red-500/20
                border
                border-red-500
                text-red-400
                hover:bg-red-500
                hover:text-white
                transition-all
                duration-300
                "
              >
                🗑 Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Wishlist;