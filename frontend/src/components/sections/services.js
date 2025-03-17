import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesSection({ services }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose from our comprehensive range of services designed to help
            your business thrive in today's competitive market.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-transform hover:scale-[1.02] duration-300"
              >
                <div className="flex flex-1 flex-col p-8">
                  {service.badge && (
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {service.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 flex-1 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-6 space-y-4">
                    {service.features?.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{service.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {service.period}
                    </span>
                  </div>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
