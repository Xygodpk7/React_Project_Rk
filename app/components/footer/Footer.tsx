// Import necessary modules and components
import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

// React functional component for the Footer
const Footer = () => {
    return (
        <footer className="
            bg-slate-700 
            text-slate-200
            text-sm
            mt-16
        ">
            {/* Container for styling and layout consistency */}
            <Container>
                {/* Footer content structure */}
                <div className="
                    flex 
                    flex-col
                    md:flex-row 
                    justfily-between 
                    pt-16 
                    pb-8
                    gap-20"
                >
                    {/* List of shop categories */}
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#">Rings</Link>
                        <Link href="#">Necklaces</Link>
                        <Link href="#">Earrings</Link>
                        <Link href="#">Bracelets</Link>
                        <Link href="#">Anklets</Link>
                        <Link href="#">Maang Tikas</Link>
                        <Link href="#">Pendants</Link>
                    </FooterList>

                    {/* List of customer services links */}
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Services</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Return & Exchange</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>

                    {/* About Us section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">
                            We are a family-owned, family-operated business that has been providing excellent service and great jewelry to Calgary, AB, for over 40 years. Since we are an independent jeweler run by a family, we select the very best silver and diamond jewelry for our customers.
                        </p>
                        <p>&copy; {new Date().getFullYear()} AL FAZAL. All rights reserved</p>
                    </div>

                    {/* Follow Us section with social media icons */}
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                            <Link href="#">
                                <MdFacebook size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillYoutube size={24} />
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
};

// Export the Footer component as the default export
export default Footer;
