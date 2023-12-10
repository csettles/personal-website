import React, { Component } from 'react'
import Markdown from 'react-markdown'
import Typewriter from 'react-ts-typewriter'

class TextContent extends Component {
  constructor(props) {
    super(props)

    this.state = { content: null }
  }

  componentWillMount() {
    fetch(this.props.contentFile)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ content: text })
      })
  }

  render() {
    return (
      <div className="px-8 sm:px-0">
        <div className="pt-8 sm:p-0 w-full text-center text-4xl sm:text-7xl font-semi-bold font-space">
          <Typewriter
            text={this.props.title}
            loop={true}
            speed={200}
            delay={1000}
          />
        </div>
        <div class="mt-4 mb-10 flex-grow border-t border-gray-400"></div>
        <div className="mx-auto prose prose-stone sm:prose-lg">
          <Markdown>{this.state.content}</Markdown>
        </div>
      </div>
    )
  }
}

export default TextContent
