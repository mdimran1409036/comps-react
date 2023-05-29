import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className="mt-2">
      <Button primary onClick={() => handleClose()}>
        Accept the aggrement
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <h2>This is modalPage title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
        architecto mollitia, distinctio quaerat aut asperiores obcaecati facere
        provident? Autem, sapiente ex cumque similique natus veniam neque?
        Necessitatibus aliquam quis dicta. Velit est odit porro explicabo quod
        labore reprehenderit quisquam aliquid adipisci voluptates culpa sint,
        sapiente, delectus illo, minima excepturi.
      </p>
    </div>
  );
};

export default ModalPage;
