import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherWidget from "../src/components/WeatherWidget";

describe("WeatherWidget", () => {
  test("renders the weather details correctly", () => {
    render(<WeatherWidget />);

    // Check for city name
    expect(screen.getByText("Melbourne")).toBeInTheDocument();

    // Check for temperature
    expect(screen.getByText("32°")).toBeInTheDocument();

    // Check for time
    expect(screen.getByText("Tue 16th 3:46 PM")).toBeInTheDocument();

    // Check for details section labels
    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText("Chance of Rain")).toBeInTheDocument();
    expect(screen.getByText("Wind")).toBeInTheDocument();
    expect(screen.getByText("Tomorrow")).toBeInTheDocument();

    // Check for details values
    expect(screen.getByText("78%")).toBeInTheDocument();
    expect(screen.getByText("34%")).toBeInTheDocument();
    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("30°")).toBeInTheDocument();
  });

  test("renders the weather icons correctly", () => {
    render(<WeatherWidget />);

    // Check if the BsCloudSun icon is rendered
    const cloudIcon = screen.getByTestId("BsCloudSun");
    expect(cloudIcon).toBeInTheDocument();

    // Check if the BsFillSunFill icon is rendered
    const sunIcon = screen.getByTestId("BsFillSunFill");
    expect(sunIcon).toBeInTheDocument();
  });
});
