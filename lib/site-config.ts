export const siteConfig = {
  name: "Warik Labs",
  title: "Warik Labs | AI for Everyday Life",
  description: "Warik Labs is exploring personal AI experiences that help people organize tasks, manage everyday plans, and coordinate useful actions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const hasContactEmail = Boolean(siteConfig.contactEmail && siteConfig.contactEmail.includes("@"));
