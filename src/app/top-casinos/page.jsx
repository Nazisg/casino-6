import Card from "@/components/Card";
import { casinos } from "@/data/casinos";

export default function TopCasinos() {
    return (
        <section id="top-casinos" className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {/* Cards */}
                <div className="flex flex-col xl:gap-8 gap-4">
                    {casinos.map((casino, index) => (
                        <Card 
                            key={index} 
                            rank={index + 1}  
                            {...casino} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
