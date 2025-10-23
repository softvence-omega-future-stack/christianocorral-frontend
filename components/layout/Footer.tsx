// components/layout/Footer.tsx
import Wrapper from "./Wrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <Wrapper className="flex flex-col md:flex-row justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2">SmartShop</h3>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="space-y-2">
          <Link href="/faq" className="block hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="block hover:text-white">
            Contact
          </Link>
        </div>
        <div>
          <p>Follow us on</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
