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
    <Text
      variant="caption"
      tone="default-inverse"
      class="md:text-[1.1rem]"
    >
      {isIcon(item)
        ? (
          <div class="border border-white rounded-full bg-white w-7 h-7 flex justify-center items-center">
            <Icon
              id={item.icon}
              width={28}
              height={23}
              strokeWidth={1.5}
              color={"#b92c38"}
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
    <footer class="w-full bg-footer flex flex-col bg-[#b92c38]">
      <div>
        <Container class="flex flex-col place-content-start">
          <FooterContainer>
            <Newsletter />
          </FooterContainer>

          <FooterContainer class="flex flex-row text-white gap-5 md:place-self-end">
            <div class="border border-white rounded-full bg-white w-7 h-7 flex justify-center items-center">
              <Icon
                id={"Instagram"}
                width={28}
                height={23}
                strokeWidth={1.5}
                color={"#b92c38"}
              />
            </div>
            <div class="border border-white rounded-full bg-white w-7 h-7 flex justify-center items-center">
              <Icon
                id={"Facebook"}
                width={28}
                height={23}
                strokeWidth={1.5}
                color={"#b92c38"}
              />
            </div>
            <div class="border border-white rounded-full bg-white w-7 h-7 flex justify-center items-center">
              <Icon
                id={"WhatsApp"}
                width={23}
                height={18}
                strokeWidth={0.1}
                color={"#b92c38"}
              />
            </div>
            <div class="border border-white rounded-full bg-white w-7 h-7 flex justify-center items-center">
              <Icon
                id={"Tiktok"}
                width={28}
                height={23}
                strokeWidth={1.5}
                color={"#b92c38"}
              />
            </div>
            <div class="border border-white rounded-full bg-white w-7 h-7 flex justify-center items-center">
              <Icon
                id={"User"}
                width={28}
                height={23}
                strokeWidth={1.5}
                color={"#b92c38"}
              />
            </div>
          </FooterContainer>

          <div class="md:flex md:flex-row md:divide-x-2 md:divide-default md:pl-0">
            <FooterContainer class="md:py-0 md:px-0 text-white md:w-[30%] md:mr-10 md:ml-0 text-[1.1rem]">
              <p>
                Espaço para curta descrição do negócio, não permitir que sejam
                escritas muitas coisas aqui pra não deixar o rodapé muito
                grande.
              </p>
              <br />
              <p>Av. Cândido Hartmann - Mercês - Curitiba - Paraná - Brasil</p>
              <br />
              <p class="font-bold">email@dominio.com.br</p>
            </FooterContainer>

            <hr class="mx-5 md:hidden" />

            <FooterContainer class="md:flex md:py-0 md:px-0 w-full">
              {/* Desktop view */}
              <ul class="hidden sm:flex flex-row gap-60 ml-5 w-full justify-between text-[1.4rem]">
                {sections.map((section) => (
                  <li>
                    <div>
                      <Text
                        variant="heading-3"
                        tone="default-inverse"
                        class="font-bold"
                      >
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
                        <div class="justify-end absolute right-0 mr-5">
                          <Icon
                            id="ChevronDown"
                            width={20}
                            height={20}
                            strokeWidth={1}
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
          </div>
          <hr class="mx-5 md:hidden" />
        </Container>
      </div>

      <div class="w-full">
        <Container class="w-full">
          <FooterContainer class="flex w-full">
            <img
              src="https://cdn.vnda.dev/template6/2022/03/03/15_3_7_777_securitybadge.svg?v=1649879201"
              alt="Site Verificado"
              class="mr-auto w-36 h-16"
            />
            <ul class="flex place-content-end gap-2">
              <li>
                <Icon
                  class="text-default-inverse"
                  width={32}
                  height={32}
                  id="Visa"
                  strokeWidth={1}
                />
              </li>
              <li>
                <Icon
                  class="text-default-inverse"
                  width={32}
                  height={32}
                  id="Mastercard"
                  strokeWidth={1}
                />
              </li>
            </ul>
          </FooterContainer>
          <FooterContainer class="md:pt-0">
            <p class="text-white text-center text-sm md:text-left">
              Vnda - Tecnologia em E-commerce
            </p>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
