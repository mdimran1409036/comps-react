const SideBar = ({handlePath}) => {
  const handleClick = (componentName) => {
    handlePath(componentName.toLowerCase())
  };
  return (
    <ul className="flex flex-col w-48 border gap-4 p-2">
      {["Accordion", "Button", "Dropdown"].map((componentName, index) => (
        <li className="cursor-pointer" onClick={()=>handleClick(componentName)} key={index}>
          {componentName}
        </li>
      ))}
    </ul>
  );
};
export default SideBar;
