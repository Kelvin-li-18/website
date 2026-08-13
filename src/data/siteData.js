import React from "react";

export const siteData = {
  profile: {
    name: "Kelvin Li",
    photo: "/images/profile.jpg",
    description: (
      <>
        I am a 5th-Year M.S. student in EECS at UC Berkeley, where I
        previously studied EECS and Mathematics as an undergraduate. I am
        advised by{" "}
        <a
          href="https://roeiherz.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 transition-colors hover:text-orange-500"
        >
          Roei Herzig
        </a>{" "}
        and{" "}
        <a
          href="https://people.eecs.berkeley.edu/~trevor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 transition-colors hover:text-orange-500"
        >
          Prof. Trevor Darrell
        </a>
        .
      </>
    ),
  },

  socialLinks: [
    {
      label: "Email",
      href: "mailto:kelvin.li.jm@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kelvin-li-jm/",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=2sCyIbYAAAAJ&hl=en&oi=sra",
    },
  ],

  publications: [
    {
      id: "livr-cvpr-2026",
      title: "Latent Implicit Visual Reasoning",
      venue: "CVPR 2026 · * Equal contribution",
      authors: [
        { name: "Kelvin Li", equal: true },
        { name: "Chuyi Shang", equal: true },
        { name: "Leonid Karlinsky" },
        { name: "Rogerio Feris" },
        { name: "Trevor Darrell" },
        { name: "Roei Herzig" },
      ],
      links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2512.21218",
      },
      {
        label: "Project",
        href: "https://www.chuyishang.com/livr/",
      },
    ],
      description:
        "LIVR explores how multimodal models can learn to form and reason over abstract visual representations on their own, rather than relying on explicit human-designed intermediate visual reasoning steps.",
      image: "/images/livr_teaser.png",
    },
  ],

  academicService: [
    {
      role: "Reviewer",
      venue: "ECCV",
      year: "2026",
    },
  ],
  
};