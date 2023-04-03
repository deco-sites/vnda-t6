import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center gap-12 md:gap-6">
      <div class="bg-gray-300 w-[144px] h-[144px] absolute mt-[-50px] ml-[20rem] md:ml-0 md:mt-[-160px]">
        <p class="text-gray-500">280 x 180</p>
      </div>
      <div class="flex flex-col gap-2 place-self-start md:place-self-center max-w-[290px] md:max-w-[750px] md:pl-[20rem]">
        <Text
          variant="heading-2"
          tone="default-inverse"
          class="uppercase font-black"
        >
          BLOCO DE NEWSLETTER
        </Text>
        <Text variant="caption" tone="default-inverse">
          Descrição curta da newsletter em até duas linhas alinhado à esquerda.
        </Text>
      </div>
      <form class="flex flex-col items-center gap-2 font-body text-body md:pr-2 w-full">
        <input
          class="flex py-2 px-3 flex-grow bg-footer rounded text-default-inverse border-1 border-default w-full"
          placeholder="Digite seu e-mail..."
        />
        <button
          class="text-white py-2 px-3 border-1 rounded w-full"
          type="bgutton"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
