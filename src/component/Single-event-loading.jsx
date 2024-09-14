function SingleEventLoading() {
  return (
    <div className="animate-pulse flex justify-between shadow rounded-md w-full gap-10 p-5">
      <div className=" bg-slate-200 h-[700px] w-4/12"></div>
      <div className="flex flex-col gap-5 items-start justify-center w-9/12 h-full py-5">
        <div className=" bg-slate-200 h-8 w-10/12"></div>
        <div className=" bg-slate-200 h-12 w-8/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
        <div className=" bg-slate-200 h-5 w-6/12"></div>
      </div>
    </div>
  );
}

export default SingleEventLoading;
