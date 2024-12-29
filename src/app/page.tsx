import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeMenu from "@/components/homeMenu";



export default function Home() {
  return (
    <>
        <div className="container h-screen flex flex-col justify-between items-center mx-auto">
            <Header src="image/4212NEW.jpg" />
            <div className="flex md:py-10 w-11/12 py-6">
            <HomeMenu/>
                </div>
            <Footer />
        </div>
    </>
  );
}
