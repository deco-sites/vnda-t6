import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
  placeholder?: string;
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class="flex-grow min-h-[40px] flex items-center justify-start text-accent"
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li>
      <div
        class={`flex justify-between items-center w-full py-2 ${
          level > 0 ? "pl-2" : ""
        }`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : (
            <a class="w-full inline-block text-accent" href={item.href}>
              {title}
            </a>
          )}

        {hasChildren && (
          <Button variant="icon" class="text-accent">
            <Icon
              class={open.value === true ? "hidden" : "block"}
              id="Plus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={open.value === true ? "block" : "hidden"}
              id="Minus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul class={`flex-col ${open.value === true ? "flex" : "hidden"}`}>
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items, placeholder }: Props) {
  return (
    <div class="flex flex-col">
      <div class="p-4">
        <div class="border-1 p-3 items-center rounded-[4px] border-accent flex flex-row gap-4">
          <Icon
            id="MagnifyingGlass"
            class="text-accent"
            width={20}
            height={20}
            strokeWidth={0.1}
          />

          <input
            id="search-input"
            class="flex-grow outline-none placeholder-shown:sibling:hidden"
            role="combobox"
            placeholder={placeholder}
            aria-controls="search-suggestions"
            aria-expanded="false"
            autocomplete="off"
          />
        </div>
      </div>

      <ul class="px-4 flex-grow flex flex-col divide-y divide-default">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>
    </div>
  );
}

export default Menu;
