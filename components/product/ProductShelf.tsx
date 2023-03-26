import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div id={id} class="py-10 px-0 sm:px-5">
      <Container>
        <div class="flex flex-row justify-between w-full">
          <h2 class="row-start-1 col-span-full">
            <Text class="text-accent uppercase font-bold" variant="heading-2">
              {title}
            </Text>
          </h2>

          <Button as="a" href="#" variant="secondary">
            Veja mais +
          </Button>
        </div>
      </Container>

      <Container class="grid grid-cols-[48px_1fr_48px] grid-rows-[12px_1fr_48px_1fr]">
        <Slider
          class="gap-6 col-span-full row-start-2 row-end-5"
          snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
        >
          {products?.map((product) => (
            <div class="min-w-[270px] max-w-[270px] sm:min-w-[292px] sm:max-w-[292px]">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>

        <SliderControllerJS rootId={id} />
      </Container>

      <Container class="flex flex-row justify-between mt-4">
        <Button
          class="text-accent shadow"
          variant="icon"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon width={20} height={20} id="ChevronLeft" strokeWidth={3} />
        </Button>

        <Button
          class="text-accent shadow"
          variant="icon"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon width={20} height={20} id="ChevronRight" strokeWidth={3} />
        </Button>
      </Container>
    </div>
  );
}

export default ProductShelf;
