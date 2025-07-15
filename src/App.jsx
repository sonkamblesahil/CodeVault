import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex p-1 h-[89vh] gap-2 ">

      <LeftSideBar />

      <MainContainer />
      </div>
    </div>
  );
}

export default App;
