/* eslint-disable react/destructuring-assignment */
import { Component, ReactNode, ErrorInfo } from 'react';

interface IProps {
    children?: ReactNode
}

interface State {
    hasError: boolean;
    errorMessage: string
  }

class ErrorBoundary extends Component<IProps, State> {
  constructor(props: IProps) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Ошибка</h2>

          {this.state.errorMessage && (
            <div>
              {this.state.errorMessage}
            </div>
          )}

          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Повторить попытку
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
