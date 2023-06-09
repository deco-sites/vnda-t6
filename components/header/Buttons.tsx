import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      variant="icon"
      class="text-accent"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={26} height={26} strokeWidth={0.01} />
    </Button>
  );
}

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;
  const dataDeco = displayCart.value ? {} : { "data-deco": "open-cart" };

  return (
    <Button
      {...dataDeco}
      variant="icon"
      class="relative text-accent"
      aria-label="open cart"
      onClick={() => {
        displayCart.value = true;
      }}
    >
      <Icon id="ShoppingCart" width={28} height={28} strokeWidth={2} />
      {totalItems && (
        <span class="absolute text-[9px] right-0 top-0 rounded-full bg-badge text-white w-4 h-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
}

function HeaderButton({ variant }: { variant: "cart" | "menu" }) {
  if (variant === "cart") {
    return <CartButton />;
  }

  if (variant === "menu") {
    return <MenuButton />;
  }

  return null;
}

export default HeaderButton;
