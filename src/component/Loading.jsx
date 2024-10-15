function Loading() {
  return (
    <div className="shadow rounded-md w-full">
      <div className="animate-pulse flex lg:flex-row flex-col">
        <div className=" bg-slate-200 h-44 lg:h-[250px] w-full lg:w-5/12"></div>
        <div className="w-full lg:w-7/12 p-5 flex flex-col justify-center items-center lg:justify-between">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="w-full h-8 rounded-md bg-slate-200"></h2>
            <span className="flex gap-2 items-center">
              <p className="w-24 lg:w-5 h-8 rounded-md  bg-slate-200"></p>
              <p className="w-full h-8 rounded-md  bg-slate-200"></p>
            </span>
            <p className="w-full h-8 rounded-md bg-slate-200"></p>
          </div>
          <span className="w-full h-8 rounded-md bg-slate-200"></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
