"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { features, achievements, services } from "@/config/site";
import { ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="max-w-lg text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Business with Expert Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We help businesses scale and succeed in the digital age with
              comprehensive strategies, innovative solutions, and expert
              guidance.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Business team working"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative -mt-12 sm:mt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="flex flex-col items-center gap-y-3 rounded-2xl bg-card p-8 text-center shadow-lg"
              >
                <dt className="text-4xl font-semibold tracking-tight">
                  {achievement.metric}
                </dt>
                <dd className="text-sm text-muted-foreground">
                  {achievement.label}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
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
              {services.slice(0, 3).map((service) => (
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
                      <span className="text-2xl font-bold">
                        {service.price}
                      </span>
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
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              The right partner for your business
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We combine expertise, innovation, and dedication to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                  <dt className="text-xl font-semibold leading-7">
                    {feature.title}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-secondary" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Let's work together to achieve your business goals. Contact us today
            to get started.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
