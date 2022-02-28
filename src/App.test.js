import { render, screen } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  jest.clearAllMocks();
});

function mockFetchRandomAdvice(advice = "any_random_advice") {
  return jest
    .spyOn(global, "fetch")
    .mockName("fetch")
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValueOnce({
          slip: {
            advice,
          },
        }),
      })
    );
}

test("renders a random advice", async () => {
  mockFetchRandomAdvice("a_random_advice");

  render(<App />);
  const adviceElement = await screen.findByText(/^a_random_advice$/);

  expect(adviceElement).toBeInTheDocument();
});

test("calls advice slip API for a random advice", () => {
  const fetchSpy = mockFetchRandomAdvice();

  render(<App />);

  expect(fetchSpy).toHaveBeenCalledWith("https://api.adviceslip.com/advice");
});
