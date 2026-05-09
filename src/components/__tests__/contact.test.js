import { render, screen } from "@testing-library/react";
import Contact from '../Contact'; // adjust if needed
import "@testing-library/jest-dom"; 


test("Should load contact us componenet",() => {
    render (<Contact />);


    const heading = screen.getByRole("heading", {
        name: "Contact us page",
    });// for this babel config have beeen added and  npm install @babel/preset-react is done
    // trying to render component onto JSDOM and trying to find heading inside 
    expect(heading).toBeInTheDocument();
     //trying to find wheather heading is present or not - for this "@testing-library/jest-dom" is required 
})

test("check for button in contact page", () => {
    render(<Contact />);

    const text = screen.getByText("Hii Random heading");

    const placeholderText =
        screen.getByPlaceholderText("Enter your name");
        //find image - getAltText 

    expect(text).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
});
