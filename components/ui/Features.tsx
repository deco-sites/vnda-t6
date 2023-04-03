import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <Container class="min-h-[280px] p-6 sm:px-0 sm:py-10">
      <div>
        <div class="flex flex-col sm:flex-row justify-evenly mx-6 sm:mx-0 sm:my-10">
          {features.map(({ icon: id = "Truck", description }) => (
            <div class="flex flex-row gap-4 py-6 sm:py-0 sm:px-10">
              <Icon
                id={id}
                width={60}
                height={60}
                strokeWidth={3}
              />
              <div class="flex flex-col gap-2 place-self-center">
                <Text
                  tone="subdued"
                  variant="caption"
                >
                  {description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FeatureHighlights;
