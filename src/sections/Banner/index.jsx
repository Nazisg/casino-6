export default function Banner() {
    return (
        <section
            className="relative py-10 lg:py-15 px-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/icons/3d-img.jpg')" }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

            <div className="relative max-w-7xl mx-auto flex">
                <div className="lg:w-[50%] w-full flex flex-col gap-3 items-start">
                    <div className="flex gap-2 items-center bg-[#A41B1A]/30 py-2 px-4 border border-[#A41B1A] rounded-[20px]">
                        <img src="/icons/rating-star.svg" alt="star" />
                        <p className="opacity-80 text-[13px]">Expert-vetted and player-approved</p>
                    </div>
                    <h2 className="text-[32px] md:text-[48px] xl:text-[54px] font-bold text-white">
                        Find Your <span className="font-bold text-[#e60023]">Winning Seat.</span>
                    </h2>
                    <p className="opacity-80 text-white">
                        We've done the hard work of reviewing and ranking the world's best online casinos.
                        Play with confidence, claim the biggest bonuses, and win big.
                    </p>
                    <a href="/top-casinos">
                        <button className="bg-[#e60023] mt-3 text-white border cursor-pointer border-[#e60023] shadow-[0_0_5px_#e60023,0_0_10px_#e60023,0_0_20px_#e60023] rounded-[10px] py-3 font-bold px-6">
                            Claim Exclusive Bonus
                        </button>
                    </a>
                </div>

                <div className="lg:w-[50%] hidden lg:flex items-center justify-end w-full">
                    <img src="/icons/casino-3d.png" alt="3d image" className=" w-[250px] " />
                </div>
            </div>

        </section>
    );
}
