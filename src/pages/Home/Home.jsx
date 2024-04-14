import Banner from "../../components/Home/Banner/Banner";
import CardLink from "../../components/Home/CardLink/CardLink";
import Doctor from "../../components/Home/Doctor/Doctor";
import Footer from "../../components/Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-12 mt-24">
                <div className="col-span-12 md:col-span-9 w-11/12 mx-auto">
                    <Banner></Banner>
                    <CardLink></CardLink>
                </div>
                <div className="md:col-span-3">
                    <Doctor></Doctor>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;