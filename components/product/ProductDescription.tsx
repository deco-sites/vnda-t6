import {useState} from 'preact/hooks';

function Tabs({tabs}) {
    const [activeTab, setActiveTab] = useState(0);

    function active(index) {
        setActiveTab(index)
    }

    return (
        <div class={"md:pl-[10px] md:pr-[10px] md:ml-[150px] md:mt-[50px] mt-[30px] pl-[10px] pr-[10px] font-montserrat text-[#B92C38] "}>
            <div class={"md:w-[50%] contents w-[100%] border-b"}>
                {tabs.map((tab, index) => (
                    <button class={`focus:outline-none box-content ${index === activeTab ? "border-b-2 border-[#B92C38] font-bold" : "border-b-2 font-normal"} `} key={index} onClick={() => active(index)
                    }>
                        {tab.label}
                    </button>
                ))}
            </div>
            {tabs[activeTab].content}
        </div>
    );
}

export default function ProductDescription() {
    const tabs = [
        {
            label: <div class={"pl-[15px] pr-[15px] cursor-pointer"}>Descrição</div>,
            content: <div class={"md:w-[50%] w-[100%] mt-[20px]"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        },
        {
            label: <div
                class={"md:w-[100%] w-[180px] pl-[15px] pr-[15px] cursor-pointer"}>Detalhes do
                Produto</div>,
            content: <div class={"md:w-[50%] w-[100%] mt-[20px]"}>
                Os detalhes do produto em geral vão englobar os materiais, e o que acompanha e compõe o produto.
                <br/>
                <br/>

                <ul class="list-disc pl-[15px]">
                    <li>98% Algodão</li>
                    <li>2% Elastano</li>
                    <li>Forro 100% Poliéster</li>
                </ul>

            </div>
        },
        {
            label: <div class={"md:w-[100%] md:float md:pt-[0px] pt-[10px] w-[100%] pl-[15px] pr-[15px] text-left cursor-pointer"}>Informações
                nutricionais</div>,
            content: <div class={"md:w-[50%] w-[100%] mt-[20px]"}>
                <p class={"pb-[15px]"}>Informação nutricional é um bom exemplo de uso de tabelas na descrição.</p>
                <table className="table-auto w-[100%]">
                    <thead>
                    <tr>
                        <th class={"border-y-2 border-[#B92C38]"}>Informação Nutricional</th>
                        <th class={"border-y-2 border-[#B92C38]"}>Porção de 200 ml (1 copo)</th>
                        <th class={"border-y-2 border-[#B92C38]"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class={"border-b-1"}>
                        <td><strong>Quantidade por porção</strong></td>
                        <td><strong>Campo funcional</strong></td>
                        <td><strong>% VD *</strong></td>
                    </tr>
                    <tr class={"border-b-1"}>
                        <td>Valor energético</td>
                        <td>40 Kcal = 168KJ</td>
                        <td>2</td>
                    </tr>
                    <tr class={"border-b-1"}>
                        <td>Carboidratos</td>
                        <td>10 g</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Açucares:</td>
                        <td>10 g</td>
                        <td>**</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <p><strong>
                    "Não contém quantidades significativas de Proteínas, Gorduras Totais,
                    Gorduras Saturadas, Gorduras Trans, Fibra Alimentar e Sódio."
                </strong></p>
                <br/>
                <p><strong>
                    *% Valores Diários de Referência com base em uma dieta de 2.000kcal ou 8.400KJ. Seus valores diários podem ser
                    maiores ou menores dependendo de suas necessidades energéticas. ** Valores diários
                    não estabelecidos.
                </strong></p>
            </div>
        },
    ];

    return <Tabs tabs={tabs}/>;
}