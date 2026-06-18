import { Link } from "react-router-dom";

function NotFound() {

  return (

    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
      flex
      flex-col
      items-center
      justify-center
      px-6
      text-center
      "
    >

      <h1
        className="
        text-8xl
        font-bold
        bg-gradient-to-r
        from-blue-400
        to-purple-500
        bg-clip-text
        text-transparent
        "
      >
        404
      </h1>

      <h2
        className="
        text-3xl
        font-bold
        mt-4
        "
      >
        Page Not Found
      </h2>

      <p
        className="
        text-slate-400
        mt-4
        max-w-md
        "
      >
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link
        to="/"
        className="
        mt-8
        px-6
        py-3
        rounded-xl
        bg-gradient-to-r
        from-blue-500
        to-purple-600
        hover:scale-105
        transition
        "
      >
        Back To Home
      </Link>

    </div>

  );
}

export default NotFound;