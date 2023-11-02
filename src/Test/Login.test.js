import { fireEvent, render } from "@testing-library/react";
import Login from "../components/Login";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { checkValidateData } from "../utils/validate";

const mockStore = configureStore([]);
const store = mockStore({ gpt: { showGptSearch: "testSearch" } });

jest.mock("../utils/validate", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../utils/validate"),
    checkValidateData: jest.fn().mockReturnValue(null),
  };
});

describe("Render Login Component", () => {
  test("Render Login Component with default Values", async () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const emailAddInput = component.getAllByPlaceholderText("Email Address")[0];
    expect(
      component.getByText("New to Netflix?Sign Up Now")
    ).toBeInTheDocument();

    const toggleSignInFormButton = component.getByTestId("toggleSignInForm");
    fireEvent.click(toggleSignInFormButton);
    expect(emailAddInput).toBeInTheDocument();
    const handleButtonClick = component.getAllByRole("button")[0];
    fireEvent.click(handleButtonClick);
    expect(component).toBeTruthy();
  });
  test('submits the Sign In form', async () => {
    const { container } = render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email Address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const signInButton = screen.getByText('Sign In');
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
  
    fireEvent.click(signInButton);
  
    // You may need to add some additional code to handle asynchronous operations
    await waitFor(() => {
      // Assert that the user is signed in or the error message is displayed as expected
      // For example, you can check if the user information is displayed on successful sign-in
      const userInfo = container.querySelector('.user-info');
      const errorMessage = container.querySelector('.error-message');
      expect(userInfo).toBeInTheDocument();
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});
