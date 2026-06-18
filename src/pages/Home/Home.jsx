import {
  Sparkles,
  Search,
  Heart,
  History,
  Shield,
  BarChart3,
  Menu,
  X,
  Trash2
} from "lucide-react";
import Footer from "../../components/Footer";
import { Link,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

import { saveWishlist } from "../../services/wishlistService";
import ReactMarkdown from "react-markdown";

import {
  searchProducts,
  compareProducts
} from "../../services/aiService";


import {
  getSearchHistory,
  deleteHistory,
  clearHistory
} from "../../services/historyService";

function Home() {
    const token = localStorage.getItem("token");
    const role =
  localStorage.getItem("role");
    const [query, setQuery] =
  useState("");
  const location = useLocation();
  const [menuOpen, setMenuOpen] =
  useState(false);
const [showCompare, setShowCompare] =
  useState(false);
const [compareLoading, setCompareLoading] =
  useState(false);
const [product1, setProduct1] =
  useState("");

const [product2, setProduct2] =
  useState("");

const [comparison, setComparison] =
  useState("");
const [loading, setLoading] =
  useState(false);
  useEffect(() => {

  if (
    location.state?.searchQuery
  ) {

    setQuery(
      location.state.searchQuery
    );

    searchFromHistory(
      location.state.searchQuery
    );

  }

}, []);
const searchFromHistory =
async (historyQuery) => {

  try {

    setLoading(true);

    const response =
      await searchProducts(
        historyQuery
      );

    setRecommendation(
      response.recommendation
    );

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);

  }

};
const handleSaveWishlist = async () => {

  try {

    await saveWishlist(
      query,
      recommendation
    );

    alert(
      "Added to Wishlist ❤️"
    );

  } catch (error) {

    console.error(error);

    alert(
      "Failed to save wishlist"
    );
  }
};
const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("role");

  window.location.href = "/";
};
const [recommendation,
  setRecommendation] =
  useState("");
  const handleSearch =
  async () => {

    if (!query.trim()) return;

    try {

      setLoading(true);

      const response =
        await searchProducts(query);

      setRecommendation(
        response.recommendation
      );

    } catch (error) {

      alert(
        "Failed to fetch recommendation"
      );

    } finally {

      setLoading(false);

    }
  };
 const handleCompare = async () => {

  try {

    setCompareLoading(true);

    const response =
      await compareProducts(
        product1,
        product2
      );

    console.log(response);

    setComparison(
      response.recommendation
    );

  } catch (error) {

    console.error(error);

  } finally {

    setCompareLoading(false);

  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[140px] opacity-20"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-[140px] opacity-20"></div>

      {/* Navbar */}

<nav
className="
fixed top-0 left-0 right-0
z-[999]
flex items-center justify-between
px-4 md:px-10
py-5
bg-slate-950/90
backdrop-blur-md
border-b border-slate-800
"
>
  <div>

    <h1 className="
   text-lg
sm:text-2xl
md:text-3xl
    font-bold
    bg-gradient-to-r
    from-blue-400
    to-purple-500
    bg-clip-text
    text-transparent
    ">
      AI Product Finder
    </h1>

    <p className="text-xs text-slate-500">
      AI Powered Product Discovery
    </p>

  </div>

  <div className="hidden lg:flex items-center gap-8">
    <button
      className="
      text-slate-300
      hover:text-blue-400
      transition
      "
    >
      Features
    </button>

    <button
      className="
      text-slate-300
      hover:text-blue-400
      transition
      "
    >
      About
    </button>

    <div className="flex gap-5 items-center">

      {!token ? (

        <>
          <Link
            to="/login"
            className="
            text-slate-300
            hover:text-blue-400
            transition
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            px-5
            py-2
            rounded-xl
            hover:scale-105
            transition
            "
          >
            Register
          </Link>
        </>

      ) : (

        <>
          <Link
            to="/wishlist"
            className="
            text-white
            hover:text-cyan-400
            transition
            "
          >
            Wishlist
          </Link>

          <Link
            to="/history"
            className="
            text-white
            hover:text-blue-400
            transition
            "
          >
            History
          </Link>

          {role === "ADMIN" && (

            <Link
              to="/dashboard"
              className="
              text-white
              hover:text-purple-400
              transition
              "
            >
              Dashboard
            </Link>

          )}

          <button
            onClick={handleLogout}
            className="
            px-4
            py-2
            rounded-xl
            bg-red-500
            hover:bg-red-600
            transition
            "
          >
            Logout
          </button>

        </>

      )}

    </div>

  </div>
  <button
  className="lg:hidden"
  onClick={() =>
    setMenuOpen(!menuOpen)
  }
>
  {
    menuOpen
      ? <X size={28} />
      : <Menu size={28} />
  }
</button>

</nav>
{
menuOpen && (

<div
className="
lg:hidden
fixed
top-[80px]
left-0
right-0
bottom-0
bg-slate-950
z-[998]
flex
flex-col
items-center
justify-start
gap-8
pt-10
"
>

  <button
    className="text-lg"
    onClick={() => setMenuOpen(false)}
  >
    Features
  </button>

  <button
    className="text-lg"
    onClick={() => setMenuOpen(false)}
  >
    About
  </button>

  {!token ? (

    <>
      <Link
        to="/login"
        onClick={() => setMenuOpen(false)}
        className="text-lg"
      >
        Login
      </Link>

      <Link
        to="/register"
        onClick={() => setMenuOpen(false)}
        className="text-lg"
      >
        Register
      </Link>
    </>

  ) : (

    <>
      <Link
        to="/wishlist"
        onClick={() => setMenuOpen(false)}
        className="text-lg"
      >
        Wishlist
      </Link>

      <Link
        to="/history"
        onClick={() => setMenuOpen(false)}
        className="text-lg"
      >
        History
      </Link>

      {role === "ADMIN" && (

        <Link
          to="/dashboard"
          onClick={() => setMenuOpen(false)}
          className="text-lg"
        >
          Dashboard
        </Link>

      )}

      <button
        onClick={() => {
          setMenuOpen(false);
          handleLogout();
        }}
        className="
        px-5
        py-2
        rounded-xl
        bg-red-500
        "
      >
        Logout
      </button>
    </>
  )}

</div>

)}
      {/* Hero */}

      <section className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 pt-32">

        <div
className="
flex
items-center
gap-2
px-4
py-2
border
border-slate-700
rounded-full
bg-slate-900/50
backdrop-blur-md
max-w-full
overflow-hidden
"
>

          <Sparkles size={18} />

          <span
className="
text-xs
sm:text-sm
truncate
"
>
            AI Powered Product Recommendations
          </span>

        </div>

       <h1
className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
font-extrabold
mt-8
max-w-4xl
leading-tight
break-words
"
>

          Discover The Perfect Product

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">

            Using Artificial Intelligence

          </span>

        </h1>

        <p
className="
text-slate-400
mt-8
text-base
sm:text-lg
md:text-xl
max-w-3xl
"
>

          Describe what you need in plain English.
          Our AI analyzes your request and recommends
          the best products instantly.

        </p>

        {/* Search Box */}

        <div className="mt-12 w-full max-w-4xl px-2">
  <div className="
   flex flex-col sm:flex-row
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-700
    rounded-2xl
    overflow-hidden
    shadow-2xl
  ">

    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="I need a gaming laptop under ₹80,000..."
      className="
        flex-1
        bg-transparent
        px-4 md:px-6
        py-5
        outline-none
      "
    />

    <button
      onClick={handleSearch}
      className="
        flex items-center gap-2
        bg-gradient-to-r
        from-blue-500
        to-purple-600
       w-full sm:w-auto
px-8
py-4
      "
    >
      {loading ? "Thinking..." : "Search"}
    </button>

  </div>

</div>

{/* AI RESULT SECTION */}

{
recommendation && (

<section
className="
mt-16
w-full
max-w-4xl
mx-auto
px-6
"
>

  <div
  className="
  bg-gradient-to-br
  from-slate-900
  to-slate-950
  border border-blue-500/20
  rounded-3xl
  p-5 md:p-10
  text-left
  shadow-2xl
  shadow-blue-500/10
  "
  >

    <div
className="
flex
flex-col
sm:flex-row
items-center
sm:items-start
gap-4
mb-8
text-center
sm:text-left
"
>

      <div
      className="
      w-12 h-12
      rounded-full
      bg-blue-500/20
      flex items-center
      justify-center
      text-xl
      "
      >
        🤖
      </div>

      <div>

        <h2
className="
text-xl
sm:text-3xl
font-bold
text-blue-400
"
>
          AI Recommendation
        </h2>

        <p className="text-slate-400">
          Personalized suggestions for your query
        </p>

      </div>

    </div>

    <div
    className="
    mb-10
    p-4
    rounded-xl
    bg-slate-800/40
    border border-slate-700
    "
    >
      <span className="text-slate-400">
        Query:
      </span>

      <span className="ml-2 text-white font-medium">
        {query}
      </span>
    </div>

    <div
className="
text-slate-300
leading-8
whitespace-pre-wrap
break-words
overflow-x-hidden
max-h-[600px]
overflow-y-auto
pr-2
"
>
      <ReactMarkdown
  components={{
    h1: ({children}) => (
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        {children}
      </h1>
    ),
    h2: ({children}) => (
      <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({children}) => (
      <h3 className="text-2xl font-semibold text-purple-400 mt-6 mb-3">
        {children}
      </h3>
    )
  }}
>
  {recommendation}
</ReactMarkdown>
    </div>

   <div
className="
flex
flex-col
sm:flex-row
gap-4
mt-6
">

      <button
        onClick={handleSaveWishlist}
        className="
        px-5 py-3
        rounded-xl
        bg-gradient-to-r
        from-pink-500
        to-red-500
        "
      >
        ❤️ Save To Wishlist
      </button>

      <button
        onClick={() => setShowCompare(true)}
        className="
        px-5 py-3
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        "
      >
        ⚖️ Compare Products
      </button>

    </div>

    {showCompare && (

      <div
      className="
      mt-8
      bg-slate-800/40
     p-4 md:p-6
      rounded-2xl
      "
      >

        <h3
 className="
 text-2xl
 font-bold
 text-cyan-400
 mb-6
 "
>
 ⚖️ Comparison Result
</h3>

        <input
          type="text"
          placeholder="Product 1"
          value={product1}
          onChange={(e) =>
            setProduct1(e.target.value)
          }
          className="
          w-full
          p-3
          mb-4
          rounded-xl
          bg-slate-900
          "
        />

        <input
          type="text"
          placeholder="Product 2"
          value={product2}
          onChange={(e) =>
            setProduct2(e.target.value)
          }
          className="
          w-full
          p-3
          mb-4
          rounded-xl
          bg-slate-900
          "
        />

        <button
  onClick={handleCompare}
  className="
    px-6
    py-3
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
  "
>

{
compareLoading ? (

<span className="flex items-center gap-2">

  <span
    className="
      w-4 h-4
      border-2
      border-white
      border-t-transparent
      rounded-full
      animate-spin
    "
  />

  Comparing...

</span>

) : (

"Compare"

)
}

</button>

      </div>

    )}

    {comparison && (

      <div className="break-words overflow-x-hidden">
  <ReactMarkdown>
    {comparison}
  </ReactMarkdown>
</div>

    )}

  </div>

</section>

)}
</section>
{/* Example Recommendations */}

{/* AI Recommendation Showcase */}

<section className="relative z-10 px-4 md:px-10 mt-24">
  <div className="text-center mb-12">

    <h2 className="text-3xl md:text-5xl font-bold">
      AI Recommendation Showcase
    </h2>

    <p className="text-slate-400 mt-3 text-lg">
      Examples of how the AI understands natural language queries.
    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="
      bg-slate-900/60
      border border-slate-800
      rounded-3xl
      p-6
      backdrop-blur-md
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-blue-500/20
      hover:shadow-2xl
      transition-all duration-300
    ">
      <p className="text-blue-400 text-sm mb-4">
        USER QUERY
      </p>

      <p className="text-slate-300 mb-6">
        Gaming laptop under ₹80,000
      </p>

      <div className="border-t border-slate-800 pt-4">

        <p className="text-green-400 text-sm mb-2">
          AI RECOMMENDATION
        </p>

        <h3 className="text-2xl font-bold">
          ASUS TUF Gaming F15
        </h3>

        <p className="text-slate-400 mt-3">
          RTX 3050 • 144Hz Display • Excellent Cooling
        </p>

      </div>

    </div>

    <div className="
      bg-slate-900/60
      border border-slate-800
      rounded-3xl
      p-6
      backdrop-blur-md
      hover:-translate-y-2
      hover:border-purple-500
      hover:shadow-purple-500/20
      hover:shadow-2xl
      transition-all duration-300
    ">
      <p className="text-purple-400 text-sm mb-4">
        USER QUERY
      </p>

      <p className="text-slate-300 mb-6">
        Best phone camera under ₹50,000
      </p>

      <div className="border-t border-slate-800 pt-4">

        <p className="text-green-400 text-sm mb-2">
          AI RECOMMENDATION
        </p>

        <h3 className="text-2xl font-bold">
          Google Pixel 8a
        </h3>

        <p className="text-slate-400 mt-3">
          Industry-leading camera quality
        </p>

      </div>

    </div>

    <div className="
      bg-slate-900/60
      border border-slate-800
      rounded-3xl
      p-6
      backdrop-blur-md
      hover:-translate-y-2
      hover:border-cyan-500
      hover:shadow-cyan-500/20
      hover:shadow-2xl
      transition-all duration-300
    ">
      <p className="text-cyan-400 text-sm mb-4">
        USER QUERY
      </p>

      <p className="text-slate-300 mb-6">
        Wireless headphones for travel
      </p>

      <div className="border-t border-slate-800 pt-4">

        <p className="text-green-400 text-sm mb-2">
          AI RECOMMENDATION
        </p>

        <h3 className="text-2xl font-bold">
          Sony WH-1000XM5
        </h3>

        <p className="text-slate-400 mt-3">
          Premium ANC & long battery life
        </p>

      </div>

    </div>

  </div>

</section>
{/* How It Works */}

<section className="relative z-10 py-24 px-4 md:px-10">

  <div className="text-center mb-16">

    <h2 className="text-3xl md:text-5xl font-bold">
      How It Works
    </h2>

    <p className="text-slate-400 mt-4 text-lg">
      Get product recommendations in three simple steps.
    </p>

  </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="
      bg-slate-900/60
      border border-slate-800
      rounded-3xl
      p-8
      text-center
      hover:scale-105
      transition
    ">

      <div className="
        w-16 h-16
        rounded-full
        bg-blue-500/20
        flex items-center
        justify-center
        text-2xl
        mx-auto mb-6
      ">
        1
      </div>

      <h3 className="text-2xl font-bold mb-3">
        Describe Your Need
      </h3>

      <p className="text-slate-400">
        Type naturally like talking to a friend.
        Example: "Gaming laptop under ₹80,000".
      </p>

    </div>

    <div className="
      bg-slate-900/60
      border border-slate-800
      rounded-3xl
      p-8
      text-center
      hover:scale-105
      transition
    ">

      <div className="
        w-16 h-16
        rounded-full
        bg-purple-500/20
        flex items-center
        justify-center
        text-2xl
        mx-auto mb-6
      ">
        2
      </div>

      <h3 className="text-2xl font-bold mb-3">
        AI Analyzes
      </h3>

      <p className="text-slate-400">
        OpenRouter AI interprets your request
        and understands your requirements.
      </p>

    </div>

    <div className="
      bg-slate-900/60
      border border-slate-800
      rounded-3xl
      p-8
      text-center
      hover:scale-105
      transition
    ">

      <div className="
        w-16 h-16
        rounded-full
        bg-cyan-500/20
        flex items-center
        justify-center
        text-2xl
        mx-auto mb-6
      ">
        3
      </div>

      <h3 className="text-2xl font-bold mb-3">
        Get Recommendations
      </h3>

      <p className="text-slate-400">
        Receive personalized product suggestions
        with explanations instantly.
      </p>

    </div>

  </div>

</section>

{/* Features */}

     <section className="relative z-10 mt-28 px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <FeatureCard
            icon={<Sparkles />}
            title="AI Recommendations"
            description="Get intelligent product suggestions instantly."
          />

          <FeatureCard
            icon={<Heart />}
            title="Wishlist"
            description="Save products and revisit later."
          />

          <FeatureCard
            icon={<History />}
            title="Search History"
            description="Track everything you searched."
          />

          <FeatureCard
            icon={<BarChart3 />}
            title="Analytics"
            description="Monitor searches and platform activity."
          />

          <FeatureCard
            icon={<Shield />}
            title="Secure Login"
            description="JWT Authentication & role management."
          />

          <FeatureCard
            icon={<Search />}
            title="Smart Discovery"
            description="Search naturally like talking to a friend."
          />

        </div>

      </section>
<Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="
      bg-slate-900/60
      border
      border-slate-800
      backdrop-blur-md
      rounded-3xl
      p-6
      hover:scale-105
      transition
      duration-300
    ">
      <div className="text-blue-400 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>

    </div>

  );
}

export default Home;