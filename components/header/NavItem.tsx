import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface INavItem {
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

function NavItem(
  { item, headerHeight }: { item: INavItem; headerHeight: string },
) {
  const { href, label, children, megamenuLink } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-8 max-h-[85px]">
        <Text
          class="flex text-[17px] flex-row gap-1 text-accent font-medium lowercase border-solid border-b border-white items-center group-hover:opacity-80"
          variant="heading-3"
        >
          {label}

          {children && children.length > 0 && (
            <Icon
              width={14}
              height={14}
              strokeWidth={2}
              id={"ChevronDown"}
              class="text-accent"
            />
          )}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 border-t-1 border-b-2 border-default w-screen mt-[${headerHeight}]`}
            style={{ top: "0px", left: "0px" }}
          >
            <div class="px-20 mx-auto flex flex-col items-start gap-6 w-full">
              <ul class="flex items-start justify-center gap-6">
                {children.map((node) => (
                  <li class="px-6 py-10">
                    <a class="hover:opacity-80" href={node.href}>
                      <Text variant="heading-2" class="font-bold text-accent">
                        {node.label}
                      </Text>
                    </a>

                    <ul class="flex flex-col gap-1 mt-4">
                      {node.children?.map((leaf) => (
                        <li>
                          <a
                            class="hover:opacity-80"
                            href={leaf.href}
                          >
                            <Text class="text-accent" variant="menu">
                              {leaf.label}
                            </Text>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              {Boolean(megamenuLink) && (
                <div class="px-6 pb-6">
                  <a class="hover:opacity-80" href={megamenuLink?.href}>
                    <Text
                      variant="body"
                      class="font-bold text-accent flex items-center flex-row gap-1 uppercase"
                    >
                      {megamenuLink?.label}

                      <Icon
                        width={14}
                        height={14}
                        strokeWidth={2}
                        id={"ChevronRight"}
                        class="text-accent"
                      />
                    </Text>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
    </li>
  );
}

export default NavItem;
