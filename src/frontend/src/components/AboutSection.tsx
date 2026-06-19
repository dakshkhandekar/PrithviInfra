import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              data-ocid="about.heading"
            >
              About <span className="text-[#e74c3c]">Us</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Prithvi Infrastructure is a trusted name in the construction
                industry, delivering excellence across residential, commercial,
                and industrial projects. With a commitment to quality, safety,
                and innovation, we transform visions into reality.
              </p>
              <p>
                Our experienced team brings decades of combined expertise in
                project management, structural design, and sustainable building
                practices. We believe every structure we build is a testament to
                our dedication and craftsmanship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-card"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src="/assets/images/founder.png"
                alt="MR. UDAY NATHURAM JAWAKE"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#e74c3c] flex-shrink-0"
                data-ocid="about.founder_photo"
              />
              <div className="text-center sm:text-left">
                <h3
                  className="font-display text-xl md:text-2xl font-bold text-foreground"
                  data-ocid="about.founder_name"
                >
                  MR. UDAY NATHURAM JAWAKE
                </h3>
                <p className="text-[#e74c3c] font-semibold text-sm uppercase tracking-wider mt-1">
                  Founder &amp; Managing Director
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                  With over 25 years of experience in the construction sector,
                  Mr. Jawake has led Prithvi Infrastructure from its inception
                  to become a respected leader in the industry. His vision for
                  quality construction and client satisfaction drives every
                  project we undertake.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
