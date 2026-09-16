import CardGrid from "../component/CardGrid";
import Hero from "../component/Hero";

function Home({fitur}){
    return (
        <div className="text-green-500">HOME
            <section>
                <Hero/>
            </section>
            <section>
                <CardGrid features={fitur} />
            </section>
        </div>
    )
}

export default Home;
