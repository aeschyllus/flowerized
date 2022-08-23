import aboutUs1 from "@/assets/images/aboutus1.webp";

export default function AboutUs() {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto flex py-14">
        <img src={aboutUs1} alt="/" className="w-96 hidden lg:block" />
        <div className="px-8 space-y-5">
          <h2 className="text-3xl uppercase text-yellow-600 tracking-widest">
            About Us
          </h2>
          <p className="text-lg">
            Blooms by Marra was started 8 years ago with their online Facebook
            page. In addition, the shop was founded by Marra's mother-in-law.
            Ms. Marra Borres is the owner of Blooms by Marra, that was named
            after her. The original name was "Kitkats Flower Shop" when her
            mother-in-law was still handling the shop. It has been a great
            opportunity for Ms. Marra to grow and continue the business. The
            goal of their shop is to provide the best quality of flowers with a
            custom arrangement that will suit the customer's preference. Blooms
            by Marra shop is located at III McArthur Highway, Marulas,
            Valenzuela.
          </p>
        </div>
      </div>
    </section>
  );
}
