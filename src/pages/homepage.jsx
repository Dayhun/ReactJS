import { Nav } from '../components/Nav';
import { EventBanner } from '../components/EventBanner';
import { Product } from '../components/Product';
import { Footer } from '../components/Footer';

export default function Homepage() {
    return (
        <>
            <Nav />
            <EventBanner />
            <Product />
            <Footer />
        </>
    )
}