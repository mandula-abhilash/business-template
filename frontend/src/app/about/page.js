"use client";

import { team, companyValues, achievements } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Lightbulb,
  Award,
  Shield,
  Users,
  Linkedin,
  Twitter,
} from "lucide-react";

const iconMap = {
  Lightbulb,
  Award,
  Shield,
  Users,
};

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We&apos;re a team of passionate individuals dedicated to
              delivering exceptional solutions and driving business success.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Company Values */}
      <div className="py-24 sm:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Values
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              What Drives Us Forward
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our core values shape everything we do and guide us in delivering
              exceptional results for our clients.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {companyValues.map((value) => {
                const Icon = iconMap[value.icon];
                return (
                  <div
                    key={value.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-6 rounded-lg bg-primary/10 p-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <dt className="text-xl font-semibold mb-4">
                      {value.title}
                    </dt>
                    <dd className="text-muted-foreground">
                      {value.description}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="bg-card rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Team
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the Experts
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our diverse team of professionals brings together expertise from
              various fields to deliver exceptional results.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="relative mx-auto h-40 w-40 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 300px"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mt-1">{member.role}</p>
                  <p className="mt-4 text-muted-foreground">{member.bio}</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Let&apos;s discuss how we can help your business reach its full
              potential.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
