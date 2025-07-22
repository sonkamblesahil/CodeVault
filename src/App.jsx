import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import LoginPage from "./components/LoginPage";

function App() {
  const isLoggedIn = false; 
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <div className="flex  h-max gap-2 pl-[20vw] pt-16 overflow-y-hidden">
        <MainContainer />
  
      </div>
    </div>
    // <div>
    //   <LoginPage/>
    // </div>
  );
}

export default App;
