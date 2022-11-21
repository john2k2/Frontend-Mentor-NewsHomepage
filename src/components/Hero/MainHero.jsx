//img
import imagen1 from "@/assets/img/image-web-3-mobile.jpg";

const MainHero = () => {
    return (
        <section className="container mx-auto mb-20 w-full px-3 md:flex">
            <div className="grid grid-cols-1 gap-8  ">
                <img
                    className="aspect-[9/9] object-center md:aspect-[16/9] md:h-[95%] md:w-[95%] "
                    src={imagen1}
                    alt=""
                />
                <div className="grid gap-8 md:w-[100%] md:grid-cols-[1fr_2fr] ">
                    <div className="">
                        <h1 className="leading-1 text-start text-5xl font-extrabold md:h-full md:leading-normal">
                            The Bringht Future of Web 3.0?
                        </h1>
                    </div>
                    <div className="md:w-full md:grid md:items-center ">
                        <p className="text-1x1 text-start font-bold leading-8 text-Dark-grayish-blue md:mb-10  md:grid md:w-4/5 mb-12 ">
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back into
                            the hands of the people. But is it really fulfilling
                            its promise?
                        </p>
                        <button className="mb-16 mr-auto bg-Soft-red py-4 px-10 text-center text-lg font-semibold uppercase tracking-[3px] text-Off-white">
                            read more
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 bg-Very-dark-blue p-8 md:w-[66%] md:gap-0 md:p-4  ">
                <h2 className="text-4xl font-extrabold text-Soft-orange md:h-0">
                    New
                </h2>

                <div>
                    <h3 className="mb-2 text-[1.3rem] font-bold text-white  ">
                        Hydrogen VS Electric Cars
                    </h3>
                    <p className="text-Off-white md:h-0">
                        {" "}
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>
                <span className="h-[1px] w-full bg-Off-white "></span>
                <div>
                    <h3 className="mb-2 text-[1.2rem] font-bold text-white ">
                        The Downsides of AI Artistry
                    </h3>
                    <p className="text-Off-white md:h-0">
                        What are the possible adverse effects of on-demand AI
                        image generation?
                    </p>
                </div>
                <span className="h-[1px] w-full bg-Off-white "></span>
                <div>
                    <h3 className="mb-2 text-[1.3rem] font-bold text-white  ">
                        {" "}
                        Is VC Funding Drying Up?
                    </h3>
                    <p className="text-Off-white md:h-0">
                        Private funding by VC firms is down 50% YOY. We take a
                        look at what that means.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainHero;
