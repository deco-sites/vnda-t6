import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export type IAlert = {
  title: string;
  action: string;
  url: string;
};

const DEFAULT_ALERT: IAlert = {
  title: "Alert title",
  action: "Action",
  url: "#",
};

export interface Props {
  alert: IAlert;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  isOpen: boolean;
  onClose: () => void;
}

function Alert(
  { alert = DEFAULT_ALERT, interval = 5, isOpen = true, onClose }: Props,
) {
  const id = useId();
  const containerClass = isOpen ? "" : "hidden";

  return (
    <div id={id} class={`relative ${containerClass}`}>
      <Slider class="bg-badge gap-6 scrollbar-none">
        <Text
          class="flex justify-center items-center w-screen h-[38px]"
          variant="body"
          tone="default-inverse"
        >
          {alert.title}

          <a href={alert.url} class="ml-2 flex flex-row gap-1 items-center">
            {alert.action}

            <Icon
              width={14}
              height={14}
              id={"ChevronRight"}
              strokeWidth={2}
              class="text-white"
            />
          </a>
        </Text>
      </Slider>

      <div
        type="button"
        onClick={onClose}
        class="absolute right-0 top-0 h-[38px] flex justify-center items-center mr-5 cursor-pointer"
      >
        <Icon
          width={14}
          height={14}
          id={"XMark"}
          strokeWidth={2}
          class="text-white"
        />
      </div>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
