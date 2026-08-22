import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Alpha",
  description:
    "Get in touch with Alpha's offshore marine services team — office locations, contact forms, and business enquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
