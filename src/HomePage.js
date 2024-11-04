
import Reservation from "./Reservation";
import Menu from "./Menu";
import Ratings from "./Rating";
import Introduction from "./Introduction";

// This component will show the main Home Page
// except the Header, Nav and Footer
const HomePage = () => {
    return (
        <>
        <Reservation />
        <Menu />
        <Ratings />
        <Introduction/>
        </>
    );
}

export default HomePage;