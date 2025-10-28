// components/homepage/SubscribeSection.tsx
import Wrapper from "../layout/Wrapper";

export default function SubscribeSection() {
  return (
    <section className="py-8 md:py-12">
      <Wrapper>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
            Receive Exclusive Offers And Promotional Deals When You Sign Up With Us!
          </h2>
          
          <form className="flex justify-center mt-8">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 w-full border border-gray-300 rounded-lg text-gray-800 outline-none focus:border-blue-500 text-sm pr-28 bg-[#E7EBF4]"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#0F3290] text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}