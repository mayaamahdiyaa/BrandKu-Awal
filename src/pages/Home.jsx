// import CardGrid from "../components/CardGrid";
import CardGrid from "../components/CardGrid";
import Hero from "../components/Hero";

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
