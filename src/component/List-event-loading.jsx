function ListEventLoading() {
  return (
    <div className="animate-pulse flex justify-between shadow rounded-md w-full">
      <div className=" bg-slate-200 h-64 w-4/12"></div>
      <div className="flex flex-col gap-5 items-center justify-center w-9/12">
        <div className=" bg-slate-200 h-5 w-10/12"></div>
        <div className=" bg-slate-200 h-5 w-8/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
      </div>
    </div>
  );
}

export default ListEventLoading;
