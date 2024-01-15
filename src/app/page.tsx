import CarouselDefault from "./components/Carousel/CarouselImage";

export default function Home() {
  const carouselItems = [
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office-work.png",
      className: "block w-full h-full rounded-lg",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office.png",
      className: "hidden w-full h-full rounded-lg lg:block",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/conference.png",
      className: "block w-full h-full rounded-lg",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/girl-with-phone.png",
      className: "hidden w-full h-full rounded-lg lg:block",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/man-at-office.png",
      className: "block w-full h-full rounded-lg",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/meeting.png",
      className: "hidden w-full h-full rounded-lg lg:block",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/work-from-home.png",
      className: "block w-full h-full rounded-lg",
      alt: "...",
    },
    {
      width: 528,
      height: 320,
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/workspace.png",
      className: "hidden w-full h-full rounded-lg lg:block",
      alt: "...",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      UI LIB Components
      <div className="mx-auto max-w-screen-xl w-full">
        <CarouselDefault items={carouselItems} columnsPerSlide={2} />
      </div>
    </main>
  );
}
