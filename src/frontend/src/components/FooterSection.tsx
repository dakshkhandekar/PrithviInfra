import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20" style={{ backgroundColor: "#e74c3c" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-none"
            data-ocid="footer.company_name"
          >
            PRITHVI INFRASTRUCTURE
          </h2>
          <p className="mt-3 text-white/80 font-mono text-sm">
            GST No. 27AECPJ4784J2Z5
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-12">
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">Phone</p>
              <p className="text-white/80 text-sm">+91 9970050961</p>
              <p className="text-white/80 text-sm">+91 7020402462</p>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">Email</p>
              <p className="text-white/80 text-sm">info@prithviinfra.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">
                Business Partners
              </p>
              <p className="text-white/80 text-sm">
                Our Happy Business Partners- Renergy Pvt. Ltd, Reliance, L&T,
                Ultratech, JSW, Onsure Pvt. Ltd, Reliance Bio Project, JNK Pvt.
                Ltd
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-white/50 text-xs">
          <p>&copy; {year} Prithvi Infrastructure. All rights reserved.</p>
          <p className="mt-1">
            Built with{" "}
            <a
              href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=prithvi-infrastructure"
              className="underline hover:text-white transition-smooth"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
