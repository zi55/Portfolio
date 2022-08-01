import React from 'react';
import '../Style/NavBar.css'
class Typer extends React.Component {

    state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 250
      });
  
      if (!isDeleting && text === fullText) {     
        setTimeout(() => this.setState({ isDeleting: true }), 500);   
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });      
      }
  
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return (
        <h1 className='Navbar-h1'>{ this.props.heading }&nbsp;
          <span className='span-typing'>{ this.state.text }</span>
          <span id="cursor"></span>
        </h1>
      );
    }
  }
export default Typer