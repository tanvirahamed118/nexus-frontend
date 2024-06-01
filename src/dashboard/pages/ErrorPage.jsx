import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section>
      <div className="container flex flex-col gap-3 justify-center items-center h-screen">
        <h2 className="text-red-500 font-bold text-4xl">Page Not Found!</h2>
        <Link to="/" className="text-blue-400 text-xl underline">
          <i className="fa-solid fa-house"></i> Home Page
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
