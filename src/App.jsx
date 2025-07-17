import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <div className="flex  h-max gap-2 pl-[20vw] pt-16 overflow-y-hidden">
        <MainContainer />
  
      </div>
    </div>
  );
}

export default App;
