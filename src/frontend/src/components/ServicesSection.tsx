import { ClipboardList, Hammer, PenTool } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring timely delivery, budget adherence, and quality control across all construction phases.",
  },
  {
    icon: PenTool,
    title: "Design and Build",
    description:
      "Integrated design and construction services that streamline workflows, reduce costs, and bring architectural visions to life.",
  },
  {
    icon: Hammer,
    title: "Renovation and Remodeling",
    description:
      "Transform existing spaces with modern upgrades, structural improvements, and aesthetic enhancements tailored to your needs.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#1a1a1a" }}
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
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            data-ocid="services.heading"
          >
            Our <span className="text-[#e74c3c]">Services</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet diverse
            project requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-lg p-8 shadow-elevated hover:shadow-hero transition-smooth group"
              data-ocid={`services.card.${index + 1}`}
            >
              <div className="w-14 h-14 rounded-full bg-[#e74c3c]/10 flex items-center justify-center mb-6 group-hover:bg-[#e74c3c] transition-smooth">
                <service.icon className="w-7 h-7 text-[#e74c3c] group-hover:text-white transition-smooth" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
