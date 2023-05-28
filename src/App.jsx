import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import SideBar from "./components/SideBar";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";

function App() {
  return (
    <div className="flex gap-4 p-1">
      <SideBar />
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  );
}

export default App;
