import {useEffect} from "react";

const Home = () => {
  useEffect(() => {
    const handleContext = (e) => {
      e.preventDefault();
    }
    document.addEventListener("contextmenu", handleContext)
    return () => document.removeEventListener("contextmenu", handleContext)
  }, [])

  
  const handleDownload = () => {
    window.open(import.meta.env.VITE_APP_URL, "_blank")
  }
  return (
    <main className="bg-black text-white">
      <div className="rating w-5/6 flex gap-1 my-10 mx-4 p-3 items-center rounded-md bg-[#353535] md:w-2/4 items-center justify-center">
        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
        <p>4.9 Of 5 By MoviesHub Users</p>
      </div>
      <div>
        <h1 className="mx-4 text-3xl md:text-4xl">Watch free movies & webseries</h1>
      </div>
      <div className="my-6 md:mx-12 md:my-20 md:text-xl">
        <p className="paragraph mx-2 text-white">
        Thousands of Movies and TV Shows. Always Free. Next Level Movie & Series App Download For Free MoviesHub App Runs under the Android platform which is the most popular operating system in the world. Dive into an extensive library of entertainment with Movies Hub App, providing endless options for your viewing pleasure.
      </p>
      </div>
      <div className="btn-container mx-8 mt-14">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 p-4 rounded-lg bg-blue-600">
          Download App
          <i className="fa-regular fa-circle-down"></i>
        </button>
      </div>
      <div className="mt-2 flex items-center gap-2 mx-8 text-[#6c7a87] mb-12">
        <p>Avilable on</p>
        <i className="fa-brands fa-android"></i>
      </div>
    </main>
  );
};

export default Home;
