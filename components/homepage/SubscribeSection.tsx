// components/homepage/SubscribeSection.tsx
import Wrapper from "../layout/Wrapper";

export default function SubscribeSection() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <Wrapper>
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">
          Subscribe to get updates about new devices and offers.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-gray-800 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-gray-900 px-6 py-2 rounded-r-lg hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </Wrapper>
    </section>
  );
}
