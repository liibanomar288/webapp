import Jobcard from "./components/Jobcard";
import main from "./components/main.jpg"
function App() {
  return (
    <div className="flex bg-slate-200 flex-1 items-center justify-center flex-col h-auto space-y-5">
      
              <div className="w-full flex-row flex items-center justify-center bg-black space-x-20  pt-10  pl-5 h-[100px] ">
                <h1 className="text-yellow-500 font-bold text-2xl">Nalka Shid</h1>
                <input type="text" className="ml-5 text-yellow-500 bg-slate-500 rounded-xl h-[30px] w-[40%] pl-5"placeholder="Search"/>

              </div>
              <div className="w-[80%] h-full">
        <div className=" bg-white opacity-80 h-[400px] flex-col " >
      <h2 className="text-center font-extrabold text-yellow-500 text-[50px] font-sans">Trending Videos</h2>

    

        </div>          

        <div className="bg-white mt-10 py-20 space-y-10 h-full w-full items-center justify-center flex flex-col">
          <h1 className="text-3xl font-bold "> Maanta Videos</h1>
          <div className="grid grid-cols-4 gap-4">
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>  
          </div>
          <h1 className="text-3xl font-bold mt-5 "> Yesterday Videos</h1>
          <div className="grid grid-cols-4 gap-4">
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>
          <Jobcard/>  
          </div>


        </div>
        <div className="w-full mt-20  h-[500px] bg-black"></div>
    </div>
    </div>
  );
}

export default App;
