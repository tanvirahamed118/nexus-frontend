function ListEventLoading() {
  return (
    <div className="animate-pulse flex lg:flex-row flex-col justify-between shadow rounded-md w-full">
      <div className=" bg-slate-200 h-44 lg:h-64 w-full lg:w-4/12"></div>
      <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-9/12 py-5 lg:py-0">
        <div className=" bg-slate-200 h-5 w-10/12"></div>
        <div className=" bg-slate-200 h-5 w-8/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
      </div>
    </div>
  );
}

export default ListEventLoading;
