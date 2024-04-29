import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function PageHero({
  heroImage,
  title,
  description,
}: {
  heroImage?: StaticImageData;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}) {
  return (
    <section>
      <div className="relative pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              {title}
            </h1>
            {description && (
              <p className="text-lg" data-aos="fade-up" data-aos-delay="150">
                {description}
              </p>
            )}
          </div>

          {/* Hero image */}
          {heroImage && (
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                className="mx-auto"
                priority
                src={heroImage}
                width="1024"
                height="637"
                alt="Hero"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
