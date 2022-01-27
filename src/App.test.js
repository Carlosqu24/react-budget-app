import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import App from './App'
import { BalanceBudget } from "./components/BalanceBudget";

describe('App Component', () => {

      test('Was be rendered', () => {
            const component = render(<App />);

            const title = screen.getByText(/app/i)
            console.log(prettyDOM(title))

            expect(title).toBeInTheDocument();
      });
});