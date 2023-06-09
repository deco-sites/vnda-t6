import Modals from "./Modals.tsx";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";

import Alert, { IAlert } from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight, headerNoAlertHeight } from "./constants.ts";
import { useSignal } from "@preact/signals";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  megamenuLink?: {
    label: string;
    href: string;
  };
}

export interface Props {
  alert: IAlert;

  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  /**
   * @description vtex config used for search autocompletion;
   */
  configVTEX?: LoaderReturnType<ClientConfigVTEX>;
}

function Header(
  {
    alert,
    searchbar: _searchbar,
    products,
    navItems = [],
    suggestions,
    configVTEX,
  }: Props,
) {
  const open = useSignal(true);
  const closeAlert = () => (open.value = false);
  const searchbar = { ..._searchbar, products, suggestions, configVTEX };
  const finalHeaderHeight = open.value ? headerHeight : headerNoAlertHeight;

  return (
    <header class={`h-[${finalHeaderHeight}]`}>
      <div class="bg-default fixed w-full z-50">
        <Alert alert={alert} isOpen={open.value} onClose={closeAlert} />

        <Navbar
          items={navItems}
          searchbar={searchbar}
          headerHeight={finalHeaderHeight}
        />
      </div>

      <Modals
        menu={{ items: navItems }}
        searchbar={searchbar}
      />
    </header>
  );
}

export default Header;
