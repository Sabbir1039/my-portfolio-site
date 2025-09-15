import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { GrLinkTop } from "react-icons/gr";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
    const { isLightTheme } = useTheme();

    return (
        <footer
            className={`py-20 transition-colors duration-300 flex items-center justify-center ${
                isLightTheme ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
            }`}
        >
            <div className="max-w-4xl text-center space-y-6">
                <p className="text-3xl md:text-4xl font-serif">THANK YOU FOR VISITING!</p>
                
                <a
                    href="#hero"
                    className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
                >
                    <span>BACK TO TOP</span> <GrLinkTop />
                </a>

                <p>If needed, you can also connect with me via:</p>
                
                <div className="space-y-2 text-lg">
                    <p className="flex items-center justify-center space-x-2">
                        <MdEmail /> <span>sabbirhossain.md@yahoo.com</span>
                    </p>
                    <p className="flex items-center justify-center space-x-2">
                        <FaSquarePhone /> <span>+8801715772079</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
