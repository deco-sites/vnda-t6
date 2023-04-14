export default function ProductListingTitle() {
    return (
        <div className="md:h-[15rem] flex relative mb-[6vw] h-[15rem] bg-[#F5F5FB]">
            <div className="flex absolute items-center bottom-0 justify-start left-[5%] m-auto right-[5%] top-0">
                <div className="md:w-[50%] md:text-left p-[20px] w-[100%] font-montserrat h-fit text-center text-[#B92C38]">
                    <span className="md:text-[12px] text-[12px] tracking-wider font-semibold leading-[1] mb-[4px] uppercase">Busca por:</span>
                    <h1 className="md:text-[28px] tracking-wider font-black text-[28px] leading-[1.2] mb-[0]">Categoria</h1>
                    <p className="md:text-[22px] font-semibold tracking-wider text-[22px] leading-[1.2] mb-[10px] margin-0">9 produtos
                        encontrados.</p>
                </div>
            </div>
        </div>
    );
}
