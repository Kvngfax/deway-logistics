import { Package, Truck, Boxes, Warehouse } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Logistics",
      desc: "We offer reliable services that make logistics simple and hassle-free from beginning to end.",
      icon: Package,
    },
    {
      title: "Delivery",
      desc: "We provide fast and reliable delivery to make your packages arrive exactly where they should, on time and very time.",
      icon: Truck,
    },
    {
      title: "Haulages",
      desc: "We ensure smooth and efficient handling of goods across various locations, making it easier for you to manage deliveries.",
      icon: Boxes,
    },
    {
      title: "Pick-up",
      desc: "Our pick-up services make it easy and quick to collect items from different locations",
      icon: Warehouse,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-30 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 justify-items-start flex flex-col">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h6 className="text-orange-500 text-xl font-semibold uppercase tracking-wide">
            Our Services
          </h6>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-[950px] text-2xl my-5 text-left self-start justify-items-start ">
            Deway Logistics delivers trusted and innovative solutions backed by years
            of expertise, ensuring your goods are transported with speed, safety, and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-orange-100 group-hover:bg-orange-400 transition">
                <Icon className="h-10 w-10 text-orange-500 group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold mb-4">{title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-xl leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <a
          href="/deway-logistics/#/services"
          className="bg-orange-500 hover:bg-orange-400 text-gray-200 px-8 py-4 text-2xl font-semibold shadow-lg transition mt-20 w-xs text-center self-center md:self-start"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
