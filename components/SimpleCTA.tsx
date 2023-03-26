import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface Props {
  title: string;
  text: string;
  cta: string;
  url: string;
}

export default function SimpleCTA(props: Props) {
  const { cta, text, title, url } = props;

  return (
    <Container class="py-10 flex justify-center items-center flex-col gap-4">
      <Text class="text-accent font-bold" variant="heading-2">
        {title}
      </Text>

      <Text class="text-accent font-medium" variant="heading-3">
        {text}
      </Text>

      <a
        href={url}
        class="text-xl uppercase font-bold text-accent transition-all hover:ml-4"
      >
        {cta}
      </a>
    </Container>
  );
}
