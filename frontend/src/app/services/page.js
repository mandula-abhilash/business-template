import { services } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl bg-muted p-8"
              >
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </p>
                  <Button asChild>
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
