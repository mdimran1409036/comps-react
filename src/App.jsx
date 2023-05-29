import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import SideBar from "./components/SideBar";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Navigation/Route";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="flex gap-4 p-1">
      <SideBar />
      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/modal">
        <ModalPage />
      </Route>
    </div>
  );
}

export default App;
