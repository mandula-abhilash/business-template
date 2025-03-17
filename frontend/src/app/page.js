"use client";

import { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features, services, achievements } from "@/config/site";

const FeaturesSection = dynamic(
  () => import("@/components/sections/features"),
  {
    loading: () => <LoadingSection />,
    ssr: false,
  }
);

const ServicesSection = dynamic(
  () => import("@/components/sections/services"),
  {
    loading: () => <LoadingSection />,
    ssr: false,
  }
);

const LoadingSection = () => (
  <div className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center space-y-4">
        <div className="h-8 w-32 bg-muted rounded-lg animate-pulse" />
        <div className="h-12 w-full bg-muted rounded-lg animate-pulse" />
        <div className="h-20 w-full bg-muted rounded-lg animate-pulse" />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-muted rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  const memoizedData = useMemo(
    () => ({
      features,
      services: services.slice(0, 3),
      achievements,
    }),
    []
  );

  return (
    <div className="relative">
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
              comprehensive strategies and expert guidance.
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

          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Business team working"
              className="rounded-2xl shadow-2xl object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority
              quality={75}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="relative -mt-12 sm:mt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 py-4 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {memoizedData.achievements.map((achievement) => (
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
          </dl>
        </div>
      </div>

      <Suspense fallback={<LoadingSection />}>
        <ServicesSection services={memoizedData.services} />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <FeaturesSection features={memoizedData.features} />
      </Suspense>

      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-secondary" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Let&apos;s work together to achieve your business goals. Contact us
            today to get started.
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
