import Link from "./Link";
import useRouter from "../hooks/useRouter";
const SideBar = () => {
  const { currentPath } = useRouter();

  return (
    <ul className="flex flex-col w-48 border gap-4 p-2">
      {["Accordion", "Button", "Dropdown"].map((link, index) => (
        <li
          key={index}
          className={`cursor-pointer ${
            currentPath === "/" + link.toLowerCase() &&
            "pl-2 border-l-2 border-red-500"
          } `}
        >
          <Link to={"/" + link.toLowerCase()}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};
export default SideBar;
