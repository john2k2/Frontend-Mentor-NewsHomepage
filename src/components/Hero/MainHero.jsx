//img
import imagen1 from "@/assets/img/image-web-3-mobile.jpg";

const MainHero = () => {
    return (
        <section className="container mx-auto mb-20 w-full px-3 md:mb-10 md:flex md:h-[60vh] ">
            <div className="grid grid-cols-1 gap-8 md:grid-rows-2">
                <img
                    className="aspect-[9/9] object-center md:aspect-[16/9] md:h-[100%] md:w-[95%] "
                    src={imagen1}
                    alt=""
                />
                <div className="md:gap- grid gap-8 md:w-[100%] md:grid-cols-[1fr_1fr] ">
                    <div>
                        <h1 className="leading-1 text-start text-6xl font-extrabold md:px-1">
                            The Bringht Future of Web 3.0?
                        </h1>
                    </div>
                    <div>
                        <div className="md:grid md:w-full md:items-center ">
                            <p className="text-1x1 mb-12 text-start font-bold leading-8 text-Dark-grayish-blue  md:mb-8 md:grid md:w-[90%] ">
                                We dive into the next evolution of the web that
                                claims to put the power of the platforms back
                                into the hands of the people. But is it really
                                fulfilling its promise?
                            </p>
                            <button className="mb-16 mr-auto bg-Soft-red py-4 px-10 text-center text-lg font-semibold uppercase tracking-[3px] text-Off-white hover:bg-Very-dark-blue md:mb-1">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:p- grid grid-cols-1 gap-8 bg-Very-dark-blue p-8 hover:text-Soft-orange md:w-[80%] md:gap-0">
                <h2 className="text-4xl font-extrabold text-Soft-orange md:h-0">
                    New
                </h2>
                <div className="pb-4">
                    <h3 className="mb-2 cursor-pointer text-[1.3rem] font-bold text-white hover:text-Soft-orange md:mt-auto ">
                        Hydrogen VS Electric Cars
                    </h3>
                    <p className="text-lg text-Off-white md:flex md:h-0 ">
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>
                <span className="h-[1px] w-full bg-Off-white "></span>
                <div className="pb-4">
                    <h3 className="mb-2 cursor-pointer text-[1.2rem] font-bold text-white hover:text-Soft-orange md:mt-auto  ">
                        The Downsides of AI Artistry
                    </h3>
                    <p className="text-lg text-Off-white md:h-0 ">
                        What are the possible adverse effects of on-demand AI
                        image generation?
                    </p>
                </div>
                <span className="h-[1px] w-full bg-Off-white "></span>
                <div className="pb-4">
                    <h3 className="mb-2 cursor-pointer text-[1.3rem] font-bold text-white hover:text-Soft-orange md:mt-auto  ">
                        Is VC Funding Drying Up?
                    </h3>
                    <p className="text-lg text-Off-white md:h-0">
                        Private funding by VC firms is down 50% YOY. We take a
                        look at what that means.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainHero;
