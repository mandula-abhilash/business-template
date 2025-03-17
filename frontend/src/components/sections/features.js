export default function FeaturesSection({ features }) {
  return (
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

        <dl className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid grid-cols-1 gap-12 lg:grid-cols-3">
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
        </dl>
      </div>
    </div>
  );
}
