import { motion } from "motion/react";

const reasons = [
  {
    image: "/assets/images/image-019ee0b9-4a62-712b-85b1-07f3730fcd6e.png",
    title: "Expert Team",
    description:
      "Our skilled professionals bring decades of hands-on experience and technical expertise to every project.",
  },
  {
    image: "/assets/images/image-019ee0b9-4b0a-741a-a794-d9aa94e38fe6.png",
    title: "Quality Materials",
    description:
      "We source only the finest materials, ensuring durability, safety, and long-lasting results.",
  },
  {
    image: "/assets/images/image-019ee0b9-4b1e-70fe-95d4-41f5944e4c6a.png",
    title: "On-Time Delivery",
    description:
      "Strict project timelines and efficient workflows guarantee your project is completed as promised.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#2d2d2d" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: "#00bcd4" }}
            data-ocid="whychooseus.heading"
          >
            Why Choose <span className="text-white">Us</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Discover the advantages that set Prithvi Infrastructure apart from
            the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
              data-ocid={`whychooseus.column.${index + 1}`}
            >
              <div className="overflow-hidden rounded-lg mb-5">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ color: "#00bcd4" }}
              >
                {reason.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
