import Button from "../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

function ButtonPage() {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div>
          <Button
            primary
            rounded
            outline
            onClick={() => console.log("I am clicked")}
          >
            <AiOutlineShoppingCart />
            <span>Add To Cart !</span>
          </Button>
        </div>
        <div>
          <Button primary onClick={() => console.log("I am clicked")}>
            <MdOutlineShoppingCartCheckout /> <span> i should be blue </span>
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Checkout
          </Button>
        </div>
        <div>
          <Button danger rounded outline>
            <MdOutlineShoppingCartCheckout />
            <span> Checkout</span>
          </Button>
        </div>
        <div>
          <Button warning>See Deal</Button>
        </div>
        <div>
          <Button secondary outline>
            Hide Ads
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Click me
          </Button>
        </div>
      </div>
    </>
  );
}

export default ButtonPage;
