export default function Loading() {
  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden justify-between">
    <div className="animate-pulse ml-2 md:ml-6 max-w-[400px] top-2/4 text-white space-y-3">
      <h1 className="font-semibold text-5xl !leading-[1.2] bg-gray-300 h-12 w-full"></h1>
      <div className="flex gap-5 items-center text-[12px] font-normal">
        <div className="flex gap-2">
          <div className="bg-gray-300 h-4 w-4"></div>
          <div className="bg-gray-300 h-4 w-12"></div>
        </div>
        <div className="gap-2 flex">
          <div className="bg-gray-300 h-4 w-4"></div>
          <div className="bg-gray-300 h-4 w-12"></div>
        </div>
      </div>
      <p className="w-3/4 text-[14px] font-medium text-ellipsis bg-gray-300 h-16"></p>
      <button className="bg-gray-500 uppercase font-semibold rounded-md py-[6px] hover:opacity-70 px-4 items-center flex gap-2">
        <span>
          <div className="bg-gray-300 h-6 w-6"></div>
        </span>
        <span className="bg-gray-300 h-6 w-20"></span>
      </button>
    </div>
    <div className="animate-pulse h-[80px] overflow-hidden absolute md:right-6 right-2 w-[60px] z-[7] items-center flex flex-col gap-2 text-white">
      <div className="bg-gray-300 h-4 w-4"></div>
      <div className="bg-gray-300 h-4 w-4"></div>
      <div className="bg-gray-300 h-4 w-4"></div>
      <div className="bg-gray-300 h-4 w-4"></div>
      <div className="bg-gray-300 h-4 w-4"></div>
    </div>
    <div className="relative rounded-lg h-[350px] overflow-hidden animate-pulse bg-gray-300"></div>
    <div className="absolute z-6 h-full w-full inset-0 animate-pulse bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.75)]"></div>
  </header>
  )
}
