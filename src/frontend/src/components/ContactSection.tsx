import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            data-ocid="contact.heading"
          >
            Get in <span className="text-[#e74c3c]">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Reach out and let&apos;s discuss
            how we can bring your vision to life.
          </p>
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-8 px-8 py-6 bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold uppercase tracking-wider text-sm rounded-sm"
            data-ocid="contact.open_modal_button"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
            data-ocid="contact.dialog"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-card border border-border rounded-lg shadow-hero p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-smooth"
                aria-label="Close contact form"
                data-ocid="contact.close_button"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div
                  className="text-center py-8"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Contact Us
                  </h3>
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-medium"
                    >
                      Name
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="mt-1"
                      data-ocid="contact.input.name"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="text-sm font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="mt-1"
                      data-ocid="contact.input.email"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-medium"
                    >
                      Phone
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="mt-1"
                      data-ocid="contact.input.phone"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      className="mt-1"
                      data-ocid="contact.input.message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold uppercase tracking-wider"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
