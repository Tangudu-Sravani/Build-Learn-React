import { render, screen } from "@testing-library/react";
import Contact from '../Contact'; // adjust if needed
import "@testing-library/jest-dom"; 

test("Should load contact page", () => {
    render(<Contact />); // for this babel config have beeen added and  npm install @babel/preset-react is done
    // const heading = screen.getByRole("heading");// trying to render component onto JSDOM and trying to find heading inside 

     const text = screen.getByText("Hii Random heading");
     const placeholderText = screen.getByPlaceholderText("Enter your name");
    expect(placeholderText).toBeInTheDocument(); //trying to find wheather heading is present or not - for this "@testing-library/jest-dom" is required 
});