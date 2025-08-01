import logo from '../assets/favicon 1.png';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 md:px-8 bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* <button className="bg-black text-white font-bold rounded-full px-6 py-2 shadow-md text-lg hover:shadow-lg transition">
          CONTACT
        </button>
        <button className="bg-black text-white font-bold rounded-full px-6 py-2 shadow-md text-lg hover:shadow-lg transition">
            WORK
        </button>
        <button className="bg-black text-white font-bold rounded-full px-6 py-2 shadow-md text-lg hover:shadow-lg transition">
            ABOUT
        </button> */}
      </div>

      {/* Center Section */}
      <div className="flex-1 flex justify-center items-center">
        {/* <img src={logo} alt="Logo" className="max-h-10 max-w-24 w-auto h-auto object-contain select-none" /> */}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 justify-end">
        {/* <a href="#" aria-label="Instagram">
          <FaInstagram className="w-4 h-4 max-w-[1rem] max-h-[1rem] block text-black" />
        </a>
        <a href="#" aria-label="TikTok">
          <FaTiktok className="w-4 h-4 max-w-[1rem] max-h-[1rem] block text-black" />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter className="w-4 h-4 max-w-[1rem] max-h-[1rem] block text-black" />
        </a> */}
      </div>
    </nav>
  );
}