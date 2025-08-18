export default function Banner() {
    return (
        <section className="py-10 lg:py-20 px-4">
            <div className="max-w-7xl mx-auto flex">
                <div className="lg:w-[50%] w-full flex flex-col gap-3 items-start">
                    <div className="flex gap-2 items-center bg-[#131628] py-2 px-4 border border-[#393F54] rounded-[20px]">
                        <img src="/icons/rating-star.svg" alt="star" />
                        <p className="opacity-80 text-[13px]">Expert-vetted and player-approved</p>
                    </div>
                    <h2 className="text-[32px] md:text-[48px] xl:text-[54px] font-bold">Find Your Winning Seat.</h2>
                    <p className="opacity-60 mx-auto">We've done the hard work of reviewing and ranking the world's best online casinos. Play with confidence, claim the biggest bonuses, and win big.</p>
                    <button className="bg-[#e60023] mt-3 text-white border border-[#e60023]  shadow-[0_0_5px_#e60023,0_0_10px_#e60023,0_0_20px_#e60023] rounded-[10px] py-3 font-bold px-6">Claim Exclusive Bonus</button>
                </div>
                <div className="lg:w-[50%] hidden lg:flex items-center justify-end">
                    <img src="/icons/3d-img.svg" alt="3d image" />
                </div>
            </div>
        </section>
    );
}
