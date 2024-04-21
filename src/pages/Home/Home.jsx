import BabyCareCom from "../../components/Home/BabyCareCom/BabyCareCom";
import Banner from "../../components/Home/Banner/Banner";
import CardLink from "../../components/Home/CardLink/CardLink";
import Categories from "../../components/Home/Categories/Categories";
import DentalCareCom from "../../components/Home/DentalCareCom/DentalCareCom";
import DiabeticCareCom from "../../components/Home/DiabeticCareCom/DiabeticCareCom";
import Doctor from "../../components/Home/Doctor/Doctor";
import HerbalCom from "../../components/Home/HerbalCom/HerbalCom";
import OTC_MedicineCom from "../../components/Home/OTC_Medicine_Com/OTC_MedicineCom";
import PersonalCareCom from "../../components/Home/PersonalCareCom/PersonalCareCom";
import PhermacyMCom from "../../components/Home/PhermacyMCom/PhermacyMCom";
import PrescriptionMediCom from "../../components/Home/PrescriptionMediCom/PrescriptionMediCom";
import WomenChoiseCom from "../../components/Home/WomenChoiceCom/WomenChoiseCom";
import Footer from "../../components/Shared/Footer/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-12 mt-24">
                <div className="col-span-12 md:col-span-9 w-11/12 mx-auto">
                    {/* All home page medicine component */}
                    <Banner></Banner>
                    <CardLink></CardLink>
                    <Categories></Categories>
                    <BabyCareCom></BabyCareCom>
                    <WomenChoiseCom></WomenChoiseCom>
                    <DiabeticCareCom></DiabeticCareCom>
                    <OTC_MedicineCom></OTC_MedicineCom>
                    <DentalCareCom></DentalCareCom>
                    <PersonalCareCom></PersonalCareCom>
                    <HerbalCom></HerbalCom>
                    <PhermacyMCom></PhermacyMCom>
                    <PrescriptionMediCom></PrescriptionMediCom>
                </div>
                <div className="md:col-span-3 md:mr-4">
                    <Doctor></Doctor>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;