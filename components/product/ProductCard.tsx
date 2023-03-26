import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const sizes = possibilities["TAMANHO"] ?? possibilities["Tamanho"];
  const options = Object.entries(sizes ?? {});

  if (options.length < 1) return null;

  return (
    <Text class="text-accent" variant="body">
      {options.length} opções disponíveis
    </Text>
  );
}

function Offer(
  { price, listPrice, priceCurrency }: {
    price?: number;
    listPrice?: number;
    priceCurrency?: string;
  },
) {
  if (!listPrice || !price || listPrice <= price) {
    return <div />;
  }

  const discountPercentage = Math.round(100 - ((price * 100) / listPrice));

  return (
    <div class="flex flex-row gap-2 items-center">
      <span class="bg-red-600 text-white rounded-xl px-2 py-0.5 text-sm font-bold">
        -{discountPercentage.toFixed(1)}%
      </span>

      <Text class="text-red-500 text-[15px]">
        {formatPrice(listPrice, priceCurrency!)}
      </Text>
    </div>
  );
}

function Installments(
  { price, priceCurrency }: { price: number; priceCurrency: string },
) {
  const installmentValue = price / 10;

  return (
    <Text class="text-accent" variant="body">
      10x de {formatPrice(installmentValue, priceCurrency!)} sem juros
    </Text>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;

  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      data-deco="view-product"
      id={`product-card-${productID}`}
      class="w-full group"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
        </div>

        <div class="grid grid-cols-1 grid-rows-[32px_32px_36px_24px] items-center py-2">
          <Text
            class="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-accent"
            variant="heading-3"
          >
            {name}
          </Text>
          <Offer
            price={price}
            listPrice={listPrice}
            priceCurrency={offers!.priceCurrency}
          />
          <Text variant="heading-2" class="text-accent font-bold">
            {formatPrice(price, offers!.priceCurrency!)}
          </Text>
          <Installments price={price!} priceCurrency={offers!.priceCurrency!} />
        </div>

        {seller && (
          <div class="flex flex-col gap-4 w-full bg-opacity-10">
            <Sizes {...product} />

            <Button as="a" variant="secondary" href={product.url}>
              Comprar
            </Button>
          </div>
        )}
      </a>
    </div>
  );
}

export default ProductCard;
