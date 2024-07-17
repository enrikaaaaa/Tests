import { fireEvent, render, screen } from "@testing-library/react";

import ImageGallery from "./ImageGallery";

describe("ImageGallery Component", () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  test("renders images", () => {
    render(<ImageGallery images={images} />);
    const imageElements = screen.getAllByRole("img");
    expect(imageElements.length).toBe(images.length);
  });

  test("opens and closes modal", () => {
    render(<ImageGallery images={images} />);

    const firstImage = screen.getByAltText("Image 1");
    fireEvent.click(firstImage);

    const modalContent = screen.getByAltText("Selected Image");
    expect(modalContent).toBeInTheDocument();

    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);
    
  });

});
