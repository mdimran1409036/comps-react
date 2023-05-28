import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import SideBar from "./components/SideBar";
import DropdownPage from "./pages/DropdownPage";
import { useEffect, useState } from "react";
function App() {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const pathName = window.location.pathname;
    setPath(pathName);
  }, []);
  const handlePath = (pathName) => {
    let url = "/" + pathName;
    if (url === "/accordion") {
      url = "/";
    }
    setPath(url);
    history.replaceState(
      { additionalInformation: "Updated the URL with JS" },
      pathName,
      url
    );
    document.title= pathName
  };
  return (
    <div className="flex gap-4 p-1">
      <SideBar handlePath={handlePath} />
      {path === "/" && <AccordionPage />}
      {path === "/button" && <ButtonPage />}
      {path === "/dropdown" && <DropdownPage />}
    </div>
  );
}

export default App;
