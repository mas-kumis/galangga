interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/logo.png",
    alt: "Galangga Tourex",
    title: "Galangga",
    url: "https://www.galangga.com",
  },
  tagline = "Pharetra maecenas felis vestibulum convallis mollis nullam congue sit.d rivers of Finland Quebec.",
  menuItems = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", url: "#" },
        { text: "About Us", url: "#" },
        { text: "Services", url: "#" },
        { text: "Tour Guide", url: "#" },
        { text: "Contact Us ", url: "#" },
      ],
    },
    {
      title: "Information",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
      ],
    },
    {
      title: "Utility Pages",
      links: [
        { text: "Style Guide", url: "#" },
        { text: "Password Protected", url: "#" },
        { text: "404 Error", url: "#" },
        { text: "Changelog", url: "#" },
        { text: "License", url: "#" },
      ],
    },
  ],
  copyright = "Copyright © 2025 Gavana Tour. All rights reserved. Developed with ❤️ by Bung Wil.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className="pt-32 pb-8 px-8 md:px-12 lg:px-32 bg-[#0f0520]">
      <div className="">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
              </div>
              <p className="mt-4 text-white text-sm">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-white">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium text-[14px] hover:text-white"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
