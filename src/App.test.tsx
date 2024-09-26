import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherWidget from "../src/components/WeatherWidget";

// Mock the react-icons used
jest.mock("react-icons/bs", () => ({
  BsCloudSun: () => <div data-testid="BsCloudSun" />,
  BsFillSunFill: () => <div data-testid="BsFillSunFill" />,
}));

describe("WeatherWidget", () => {
  test("renders the Melbourne weather information correctly", () => {
    render(<WeatherWidget />);

    // Check for text content (Melbourne)
    expect(screen.getByText("Melbourne")).toBeInTheDocument();

    // Check for Humidity, Chance of Rain, Wind, Tomorrow labels
    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText("Chance of Rain")).toBeInTheDocument();
    expect(screen.getByText("Wind")).toBeInTheDocument();
    expect(screen.getByText("Tomorrow")).toBeInTheDocument();

    // Check if the icons are rendered
    expect(screen.getByTestId("BsCloudSun")).toBeInTheDocument();
    expect(screen.getByTestId("BsFillSunFill")).toBeInTheDocument();
  });

  test("checks for the alignment of text in the weather component", () => {
    render(<WeatherWidget />);

    // Check for centered text for location,temperature and data & time
    const cityName = screen.getByTestId("city");
    const temperature = screen.getByTestId("temperature");
    const date = screen.getByTestId("dateTime");
    expect(cityName).toHaveClass("text-center");
    expect(temperature).toHaveClass("text-center");
    expect(date).toHaveClass("text-center");

    // Check for text-small class for details row
    const humidityLabel = screen.getByText("Humidity");
    expect(humidityLabel).toHaveClass("text-small");
  });
});
