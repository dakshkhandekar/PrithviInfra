import { Handshake, Mail, MapPin, Phone } from "lucide-react";

const partners = [
  "Renergy Pvt. Ltd",
  "Reliance",
  "L&T",
  "Ultratech",
  "JSW",
  "Onsure Pvt. Ltd",
  "Reliance Bio Project",
  "JNK Pvt. Ltd",
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-12">
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">Address</p>
              <p className="text-white/80 text-sm">
                At - Kuhire, Post-Pigonde, Tal - Pen, Dist - Raigad - 402106
              </p>
            </div>
          </div>
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
              <p className="text-white/80 text-sm">jawkeuday@gmail.com</p>
              <p className="text-white/80 text-sm">
                prithviinfrastructure2010@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 mb-10">
          <div className="flex items-start gap-3 justify-center mb-8">
            <Handshake className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
            <p className="text-white font-semibold text-base tracking-wide">
              Our Happy Business Partners
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20">
              {/* Column 1 */}
              <div className="flex flex-row items-start justify-center">
                {/* Diamond chain column */}
                <div className="flex flex-col items-center">
                  {partners.slice(0, 4).map((name, idx) => (
                    <div key={name} className="flex flex-col items-center">
                      {idx > 0 && <div className="w-px h-6 bg-white/40" />}
                      <span
                        className="w-2.5 h-2.5 bg-white rotate-45 flex-shrink-0 my-1"
                        data-ocid={`footer.partner.item.${idx + 1}`}
                      />
                      {idx < 3 && <div className="w-px h-6 bg-white/40" />}
                    </div>
                  ))}
                </div>
                {/* Names column */}
                <div className="flex flex-col ml-4">
                  {partners.slice(0, 4).map((name) => (
                    <div
                      key={name}
                      className="flex items-center"
                      style={{ height: "52px" }}
                    >
                      <span className="text-white/90 text-sm flex-shrink-0 leading-tight">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Column 2 */}
              <div className="flex flex-row items-start justify-center">
                {/* Diamond chain column */}
                <div className="flex flex-col items-center">
                  {partners.slice(4).map((name, idx) => (
                    <div key={name} className="flex flex-col items-center">
                      {idx > 0 && <div className="w-px h-6 bg-white/40" />}
                      <span
                        className="w-2.5 h-2.5 bg-white rotate-45 flex-shrink-0 my-1"
                        data-ocid={`footer.partner.item.${idx + 5}`}
                      />
                      {idx < 3 && <div className="w-px h-6 bg-white/40" />}
                    </div>
                  ))}
                </div>
                {/* Names column */}
                <div className="flex flex-col ml-4">
                  {partners.slice(4).map((name) => (
                    <div
                      key={name}
                      className="flex items-center"
                      style={{ height: "52px" }}
                    >
                      <span className="text-white/90 text-sm flex-shrink-0 leading-tight">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white/50 text-xs">
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
