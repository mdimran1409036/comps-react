import { useState } from "react";
import AccordionPannel from "./AccordionPannel";
const Accordion = () => {
  const [activeAccordionPannel, setActiveAccordionPannel] = useState(null);
  const data = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, alias.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in officiis? Doloribus non molestiae nesciunt corrupti, ullam dignissimos temporibus esse, tenetur perspiciatis dolores similique autem quod natus vel praesentium numquam.",
    },
    { id: 2, title: "title 2", body: "body 2" },
    { id: 3, title: "title 3", body: "body 3" },
    { id: 4, title: "title 4", body: "body 4" },
  ];
  const handleClickOnAccordionPannel = (id) => {
    setActiveAccordionPannel((prev) => {
      if (id === prev) {
        return null;
      } else {
        return id;
      }
    });
  };
  const renderedItems = data.map((item) => (
    <AccordionPannel
      key={item.id}
      item={item}
      handleClickOnAccordionPannel={handleClickOnAccordionPannel}
      isExpanded={item.id === activeAccordionPannel}
    />
  ));
  return (
    <div>
      <h2 className="text-center text-lg font-bold bg-green-100">Accordion</h2>
      {renderedItems}
    </div>
  );
};

export default Accordion;
