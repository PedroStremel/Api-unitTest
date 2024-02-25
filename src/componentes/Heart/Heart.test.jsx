import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Heart from '../Heart/Heart.jsx';
describe('Heart component', () => {

    it('should render correctly', () => {
        render(<Heart />);
        const heartElement = screen.getByTestId("heart");
        expect(heartElement).toBeInTheDocument();

    });

    it('should render correctly when selected', () => {
        render(<Heart selected />);
        const heartRendered = screen.getByTestId("heart");
        expect(heartRendered).toBeInTheDocument();
        expect(heartRendered).toHaveClass("heart-selected");
    })
})