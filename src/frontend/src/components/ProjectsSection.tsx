import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    image: "/assets/images/image-019ee099-4d2c-70c9-94ab-b31502bf162c.png",
  },
  {
    id: 2,
    image: "/assets/images/image-019ee099-50ed-74de-a2ae-448b33ef0d24.png",
  },
  {
    id: 3,
    image: "/assets/images/image-019ee099-50a7-7047-adab-26ff88e3fcfe.png",
  },
  {
    id: 4,
    image: "/assets/images/image-019ee099-511a-7651-a5eb-67b27f861ce3.png",
  },
  {
    id: 5,
    image: "/assets/images/image-019ee099-5160-7599-aa4f-2d1aa4fe29d6.png",
  },
  {
    id: 6,
    image: "/assets/images/image-019ee099-527b-763e-83d4-6d0ce3c357b4.png",
  },
  {
    id: 7,
    image: "/assets/images/image-019ee099-52c3-72f1-95f8-91c873200b21.png",
  },
  {
    id: 8,
    image: "/assets/images/image-019ee099-53c5-73db-bbe8-c32302a70871.png",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => setSelected(project)}
              data-ocid={`projects.item.${index + 1}`}
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            data-ocid="projects.lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-smooth"
                aria-label="Close lightbox"
                data-ocid="projects.lightbox_close_button"
              >
                <X size={20} />
              </button>
              <img
                src={selected.image}
                alt=""
                className="w-full max-h-[80vh] object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
