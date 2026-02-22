import Image from "next/image";

const ads = true;

export default function Vision() {
  return (
    <section className="py-24 space-y-12">
      <div className="flex flex-col-reverse space-x-6 lg:flex-row lg:gap-0">
        <div className="flex-1">
          <h2 className="heading-4 font-medium mb-4">OUR VISION</h2>
          <h3 className="heading-3 font-bold mb-4">
            NovalisAI <span className="font-normal">LIBRARY</span>
          </h3>
          <p className="heading-6 mb-6">
            Driven by our passion for simplifying design workflows,{" "}
            <span className="font-semibold">NovalisAI</span> empowers designers,
            developers, and businesses with easy access to high-quality vector
            UI icons.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <Image
                alt="check"
                src="/assets/check.svg"
                className="w-5 h-5"
                width={20}
                height={20}
              />
              <span>Large Icons Library.</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="check"
                src="/assets/check.svg"
                className="w-5 h-5"
                width={20}
                height={20}
              />
              <span>Multiple Styles.</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="check"
                src="/assets/check.svg"
                className="w-5 h-5"
                width={20}
                height={20}
              />
              <span>Diverse Categories.</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="check"
                src="/assets/check.svg"
                className="w-5 h-5"
                width={20}
                height={20}
              />
              <span>Lifetime Updates.</span>
            </div>
          </div>
        </div>
        <div className="flex-1 mb-12 lg:mb-0">
          {ads && (
            <Image
              src="/assets/about-NovalisAI-library.png"
              alt="About NovalisAI library"
              sizes="100%"
              width={0}
              height={0}
              className="rounded-xl w-150 mx-auto h-auto"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-primary text-white rounded-xl px-10 py-8 flex flex-col flex-1">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3">
            <Image
              src="/assets/bolt-fast.svg"
              width={24}
              height={24}
              alt="bolt-fast"
            />
          </div>
          <p className="heading-5 font-bold mb-3">START NOW!</p>
          <p className="heading-6">Access icons, empower your projects.</p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-xl flex-4">
          <div className="flex flex-1 flex-col px-10 py-8">
            <div className="mb-4">
              <Image
                src="/assets/grid-category.svg"
                width={24}
                height={24}
                alt="grid-category-icon"
              />
            </div>
            <p className="heading-5 font-bold mb-2">22,000+ ICONS</p>
            <p className="heading-6">
              The perfect icons for every design need.
            </p>
          </div>

          <div className="flex flex-1 flex-col px-10 py-8">
            <div className="mb-4">
              <Image
                src="/assets/layer-group.svg"
                width={24}
                height={24}
                alt="layer-group-icon"
              />
            </div>
            <p className="heading-5 font-bold mb-2">25+ CATEGORIES</p>
            <p className="heading-6">
              Diverse categories to cover all your needs.
            </p>
          </div>

          <div className="flex flex-1 flex-col px-10 py-8">
            <div className="mb-4">
              <Image
                src="/assets/swatchbook.svg"
                width={24}
                height={24}
                alt="swatchbook-icon"
              />
            </div>
            <p className="heading-5 font-bold mb-2">5 STYLES</p>
            <p className="heading-6">
              Multiple styles that suit various design trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
