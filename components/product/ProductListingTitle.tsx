export default function ProductListingTitle() {
    return (
        <div className="flex relative mb-[6vw] h-[24vw] bg-[#F5F5FB]">
            <div className="flex absolute items-center bottom-0 justify-start left-[5%] m-auto right-[5%] top-0">
                <div className="md:w-[50%] md:text-left text-center w-[100%] h-fit p-8 font-montserrat text-[#B92C38]">
                    <span className="text-[1.4vw] leading-[1] mb-[0.5rem] uppercase">Busca por:</span>
                    <h1 className="font-black text-[3vw] leading-[1.2] mb-[0]">Categoria</h1>
                    <p className="font-semibold text-[2.5vw] leading-[1.2] mb-[1rem] margin-0">9 produtos
                        encontrados.</p>
                </div>
            </div>
        </div>
    );
}
