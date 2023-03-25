import HeaderButton from "./Buttons.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Container from "$store/components/ui/Container.tsx";

import NavItem from "./NavItem.tsx";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({ items, searchbar, headerHeight }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  headerHeight: string;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={144} height={36} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:block border-b-1 border-default pl-2 pr-3">
        <Container class="flex flex-row items-center w-full">
          <div class="flex-none w-44 mr-16 px-4 py-3">
            <a href="/" aria-label="Store logo" class="block">
              <Icon id="Logo" width={144} height={36} />
            </a>
          </div>
          <div class="flex justify-center">
            {items.map((item) => (
              <NavItem item={item} headerHeight={headerHeight} />
            ))}
          </div>
          <div class="ml-auto flex-none w-44 flex items-center justify-end gap-2">
            <div class="px-3 group cursor-pointer flex flex-row gap-2">
              <Icon
                id="MagnifyingGlass"
                class="text-accent"
                width={26}
                height={26}
                strokeWidth={0.1}
              />

              <div class="group-hover:block hidden">
                <input
                  id="search-input"
                  class="flex-grow outline-none placeholder-shown:sibling:hidden border-b-2 border-accent cursor-pointer"
                  role="combobox"
                  placeholder={searchbar.placeholder}
                  aria-controls="search-suggestions"
                  aria-expanded="false"
                  autocomplete="off"
                />
              </div>
            </div>

            <Button
              as="a"
              class="text-accent"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="User" width={26} height={26} strokeWidth={1} />
            </Button>
            <HeaderButton variant="cart" />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
