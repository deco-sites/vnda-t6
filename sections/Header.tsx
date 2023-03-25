import Header from "$store/islands/Header.tsx";
import type { Props } from "$store/components/header/Header.tsx";

function HeaderSection(props: Props) {
  return <Header {...props} />;
}

export default HeaderSection;
