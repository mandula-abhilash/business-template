import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get in touch
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full rounded-md border border-border bg-background px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full rounded-md border border-border bg-background px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 block w-full rounded-md border border-border bg-background px-3 py-2"
                placeholder="Your message"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-16 space-y-8 text-center">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2 text-muted-foreground">
                {siteConfig.contact.email}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-muted-foreground">
                {siteConfig.contact.phone}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="mt-2 text-muted-foreground">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
