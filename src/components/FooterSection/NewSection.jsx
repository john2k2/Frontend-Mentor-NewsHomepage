import imagen1 from "@/assets/img/image-retro-pcs.jpg";
import imagen2 from "@/assets/img/image-top-laptops.jpg";
import imagen3 from "@/assets/img/image-gaming-growth.jpg";

const NewSection = () => {
    return (
        <>
            <section className="container mx-auto mb-20 p-4 md:grid md:h-auto md:grid-cols-3 md:gap-8">
                <div className="grid grid-cols-[1fr_2fr] gap-4 pb-8  ">
                    <div>
                        <img
                            className="aspect-auto h-full w-full object-cover"
                            src={imagen1}
                            alt=""
                        />
                    </div>
                    <div className="grid grid-rows-3">
                        <h2 className="text-4xl font-bold text-gray-400">01</h2>
                        <h3 className="h-auto cursor-pointer text-[1.4rem] font-extrabold hover:text-Soft-red">
                            Reviving Retro PCs
                        </h3>
                        <p className=" text-sm font-semibold text-gray-400">
                            What happens when old PCs are given modern upgrades?
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-4 pb-8  ">
                    <div>
                        <img
                            className="aspect-auto h-full w-full object-cover"
                            src={imagen2}
                            alt=""
                        />
                    </div>
                    <div className="grid grid-rows-3">
                        <h2 className="text-4xl font-bold text-gray-400">02</h2>
                        <h3 className="h-auto cursor-pointer text-[1.1rem] font-extrabold hover:text-Soft-red">
                            Top 10 Laptops of 2022
                        </h3>
                        <p className=" text-sm font-semibold text-gray-400">
                            Our best picks for various needs and budgets.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-4  pb-8 ">
                    <div>
                        <img
                            className="aspect-auto h-full w-full object-cover"
                            src={imagen3}
                            alt=""
                        />
                    </div>
                    <div className="grid grid-rows-3">
                        <h2 className="text-4xl font-bold text-gray-400">03</h2>
                        <h3 className="h-auto cursor-pointer text-[1.1rem] font-extrabold hover:text-Soft-red ">
                            The Growth of Gaming
                        </h3>
                        <p className=" text-sm font-semibold text-gray-400">
                            How the pandemic has sparked fresh opportunities.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewSection;
