import Link from "./Navigation/Link";
const SideBar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/count" },
  ];

  return (
    <ul className="flex flex-col w-48 border gap-4 p-2 items-start">
      {links.map((link) => (
        <Link to={link.path} className="mb-2" key={link.label} active>
          {link.label}
        </Link>
      ))}
    </ul>
  );
};
export default SideBar;
