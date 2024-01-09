import Header from "../components/header";

function songBook() {
  return (
    <div className="flex flex-col items-center text-white h-screen bg-slate-900">
      <Header text="Song Book" />
      <div className="mt-10 text-xl text-center text-slate-500">
        <h1>It's empty in here...</h1>
        <h1>Feature not yet implemented. Stay tuned.</h1>
      </div>
    </div>
  )
}

export default songBook