import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CarouselImage from "./CarouselImage";

describe("CarouselImage", () => {
  it("should render", () => {
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

    render(<CarouselImage items={carouselItems} columnsPerSlide={2} />);

    expect(screen.getAllByRole("img")[0].getAttribute("src")).toContain(
      "office-work.png"
    );
  });
});
