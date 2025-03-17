"use client";

import { services, testimonials } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(services.map((service) => service.category)),
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive solutions tailored to your needs. Choose from our
              range of professional services designed to help your business
              grow.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-card rounded-2xl shadow-lg transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  {service.badge && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-muted-foreground flex-1">
                  {service.description}
                </p>
                <div className="mt-6 space-y-4">
                  {service.features?.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 border-t border-border">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">{service.price}</span>
                  {service.period && (
                    <span className="text-sm text-muted-foreground">
                      {service.period}
                    </span>
                  )}
                </div>
                <Button asChild className="w-full mt-6">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-card rounded-2xl p-8 shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-primary fill-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="flex-1">
                  <p className="text-lg font-medium leading-8">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                <div className="mt-8 border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Contact us today to discuss how we can help your business grow
              with our professional services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
