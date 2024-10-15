function SingleEventLoading() {
  return (
    <div className="animate-pulse flex lg:flex-row flex-col justify-between shadow rounded-md w-full gap-5 p-0 lg:p-5">
      <div className=" bg-slate-200 h-52 lg:h-[700px] w-full lg:w-4/12"></div>
      <div className="flex flex-col gap-2 lg:gap-5 items-start justify-center lg:justify-start w-full lg:w-9/12 h-full lg:py-5 px-5 lg;px-0 pb-10 lg:pb-0">
        <div className=" bg-slate-200 h-8 w-full "></div>
        <div className=" bg-slate-200 h-12 w-full "></div>
        <div className=" bg-slate-200 h-5 w-full "></div>
        <div className=" bg-slate-200 h-5 w-full "></div>
        <div className=" bg-slate-200 h-5 w-full "></div>
        <div className=" bg-slate-200 h-5 w-full "></div>
        <div className=" bg-slate-200 h-5 w-full "></div>
      </div>
    </div>
  );
}

export default SingleEventLoading;
