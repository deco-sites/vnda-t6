import { useState } from "preact/hooks";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  return (
    <footer class="w-full bg-footer flex flex-col">
      <div>
        <Container class="w-full flex flex-col">
          <FooterContainer>
            <Newsletter />
          </FooterContainer>

          <FooterContainer class="flex flex-row text-white gap-5">
            <Icon
              id={"Instagram"}
              width={25}
              height={20}
              strokeWidth={1}
            />
            <Icon
              id={"Facebook"}
              width={25}
              height={20}
              strokeWidth={1}
            />
            <Icon
              id={"WhatsApp"}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
            <Icon
              id={"Tiktok"}
              width={25}
              height={20}
              strokeWidth={1}
            />
            <Icon
              id={"User"}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </FooterContainer>

          <FooterContainer class="text-white">
            <p>
              Espaço para curta descrição do negócio, não permitir que sejam
              escritas muitas coisas aqui pra não deixar o rodapé muito grande.
            </p>
            <br />
            <p>Av. Cândido Hartmann - Mercês - Curitiba - Paraná - Brasil</p>
            <br />
            <p class="font-bold">email@dominio.com.br</p>
          </FooterContainer>

          <hr class="mx-5" />

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text variant="heading-3" tone="default-inverse">
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul className="flex flex-col h-full lg:hidden text-white gap-3">
              {sections.map((section, index) => {
                return (
                  <li key={index} class="flex flex-col">
                    <div
                      class="font-bold uppercase flex flex-row gap-5"
                      onClick={() => setActiveSectionIndex(index)}
                    >
                      {section.label}
                      <div>
                        <Icon
                          id="ChevronDown"
                          width={20}
                          height={20}
                          strokeWidth={3}
                        />
                      </div>
                    </div>

                    {index === activeSectionIndex && (
                      <div class="p-2 max-h-screen flex flex-1 flex-col">
                        {section.children.map((item) => {
                          return <SectionItem item={item} />;
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </FooterContainer>
          <hr class="mx-5" />
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="flex justify-between w-full">
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </Text>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
