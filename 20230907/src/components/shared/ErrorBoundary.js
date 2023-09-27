import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  // 📍나중에 회사가서는 sentry를 쓸 때 이 구간에다가 넣어주면 된다.
  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
