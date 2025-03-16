"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:ring-primary"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:ring-primary"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:ring-primary"
                  placeholder="Your message"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <Mail className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  {siteConfig.contact.email}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <Phone className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  {siteConfig.contact.phone}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <MapPin className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  {siteConfig.contact.address}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <Clock className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat - Sun: Closed
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564658827!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
