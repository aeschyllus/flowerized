import { Link } from "@inertiajs/inertia-react";
import introVid from "@/assets/videos/vid-1.webm";
import featured1 from "@/assets/images/5k-bouquets.webp";
import featured2 from "@/assets/images/coffee.webp";
import featured3 from "@/assets/images/luna.webp";
import featured4 from "@/assets/images/naomi.png";
import review1 from "@/assets/images/rhena.webp";
import review2 from "@/assets/images/mj.webp";
import review3 from "@/assets/images/kian.webp";
import review4 from "@/assets/images/antor.webp";

export default function Home() {
  const featuredItems = [
    { src: featured1, name: "Money Bouquets", price: 1500 },
    { src: featured2, name: "Coffee", price: 300 },
    { src: featured3, name: "Luna", price: 300 },
    { src: featured4, name: "Naomi", price: 250 },
  ];

  const reviews = [
    {
      src: review1,
      name: "Rhena Mengote",
      profession: "UI/UX Designer",
      remarks: `
        "Highly recommend! I ordered a bouquet for my boss's wife.
        They're super happy with it. Price is not that expensive yet
        the quality of the bouquet pang worth 5k+ sa ibang shops.
        Delivery, nasunod talaga yung around 9 AM na arrival. Will
        order again next time. Thanks sa seller for the prompt
        response. God bless."
      `,
    },
    {
      src: review2,
      name: "MJ Pagdanganan",
      profession: "Rich Tita of Valenzuela",
      remarks: `
        "I am in the USA and they were able to accomodate a delivery for me in
        the Philippines exactly how I asked. I will be commissioning with them
        again. Thank you so much."
      `,
    },
    {
      src: review3,
      name: "Kian Principe",
      profession: "Frontend Developer",
      remarks: `
        "Amazing service. They are fast and always ready to entertain
        inquiries. Their arrangements are gorgeous and reasonably picked. For
        the times I have ordered, they arrived on the dot even on short
        notice! Thank you very much!"
      `,
    },
    {
      src: review4,
      name: "Philip Antor",
      profession: "Fullstack Developer",
      remarks: `
        "Fast replies, fast transactions, madali kausap, swak na swak sa same
        day delivery. This shop didn't disappoint. Tapos kudos din sa
        nagdeliver, buong buo yung flowers!"
      `,
    },
  ];

  return (
    <>
      <section className="grid place-items-center h-[70vh]">
        <video
          src={introVid}
          className="h-[70vh] w-full object-cover absolute"
          autoPlay
          loop
          muted
        />
        <div className="grid place-items-center z-[2] bg-black/60 h-full w-full">
          <div className="text-white text-center space-y-14">
            <p className="font-kaushan text-5xl lg:text-7xl">
              "You bring the love, we'll bring the flowers."
            </p>
            <p className="text-2xl">
              Find the perfect flower for that important day
            </p>
            <Link
              href="/customize"
              className="bg-yellow-600 text-lg uppercase px-3 py-2 inline-block transition hover:bg-yellow-700"
            >
              Customize Now
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1300px] mx-auto px-5 py-14 space-y-14">
          <h2 className="text-3xl uppercase tracking-widest text-yellow-600 text-center">
            Featured
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {featuredItems.map((item) => (
              <div className="shadow-lg" key={item.name}>
                <img src={item.src} alt={item.name} />
                <div className="bg-white flex justify-between p-3">
                  <div>
                    <p className="text-yellow-600 text-xl">{item.name}</p>
                    <p className="text-neutral-500 text-sm">
                      {Intl.NumberFormat("ph-PH", {
                        style: "currency",
                        currency: "PHP",
                      }).format(item.price)}
                    </p>
                  </div>
                  <p className="text-neutral-500 hover:underline">
                    Add to Cart
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1300px] mx-auto px-5 py-14 space-y-14">
          <h2 className="text-3xl uppercase tracking-widest text-yellow-600 text-center">
            What our customers are saying
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {reviews.map((review) => (
              <figure
                className="lg:flex shadow-lg p-8 lg:p-0 bg-white"
                key={review.name}
              >
                <img
                  src={review.src}
                  alt={review.name}
                  className="rounded-full lg:rounded-none w-24 lg:w-48 object-cover mx-auto"
                />
                <div className="pt-6 lg:p-8 text-center lg:text-left space-y-4">
                  <blockquote className="text-lg">{review.remarks}</blockquote>
                  <figcaption>
                    <p className="text-yellow-600">{review.name}</p>
                    <p className="text-neutral-500">{review.profession}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
