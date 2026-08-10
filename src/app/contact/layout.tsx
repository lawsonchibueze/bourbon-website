import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Alpha",
  description:
    "Get in touch with Alpha's offshore marine services team — head office, phone, email, and an online enquiry form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
