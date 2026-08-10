"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No backend is wired up yet — this simply confirms receipt locally.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions about our services, a project to discuss, or a career to start &mdash; we'd like to hear from you."
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand mt-1 shrink-0" />
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-2 text-muted-foreground">
                    Head Office
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    50, Rue de Forbin - CS 60703 -13235
                    <br />
                    Marseille Cedex 02 - France
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand mt-1 shrink-0" />
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-2 text-muted-foreground">
                    Phone
                  </h3>
                  <p className="text-foreground">+33 (0)4 91 13 08 00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand mt-1 shrink-0" />
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-2 text-muted-foreground">
                    Email
                  </h3>
                  <p className="text-foreground">contact@alpha-offshore.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="border border-border p-10 bg-secondary/60">
                  <p className="text-xs tracking-[0.15em] uppercase text-brand font-medium mb-3">
                    Message Sent
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                    Thank you, {name || "there"}.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    We&apos;ve received your message and a member of our team
                    will get back to you shortly at{" "}
                    {email || "the address you provided"}.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more about your enquiry"
                      className="min-h-[160px]"
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
