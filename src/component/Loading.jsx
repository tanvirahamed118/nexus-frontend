function Loading() {
  return (
    <div className=" shadow rounded-md w-full">
      <div className="animate-pulse flex space-x-4">
        <div className=" bg-slate-200 h-[250px] w-5/12"></div>

        <div className="w-7/12 p-5 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="w-full h-8 rounded-md bg-slate-200"></h2>
            <span className="flex gap-2 items-center">
              <p className="w-5 h-8 rounded-md  bg-slate-200"></p>
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
