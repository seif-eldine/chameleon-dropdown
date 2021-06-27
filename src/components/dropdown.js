/* 

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊
  1. Please fix any obvious issues you see with the dropdown.
  2. Please then make improvements to the dropdown.
  3. Consider the different ways that this dropdown might be used and what changes would
     be neccessary to make it more flexible.
  4. If we wanted to sync this dropdown selection to the server with
     app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included?
  5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
     what changes should be made? (just a sentence or two or some code is ok).
  
  PS: No need to worry about CSS.

 */

  import React, {PureComponent} from 'react';

  // fixed => constuctor to => contructor.
  // Fixed aria-expended to => aria-expanded.
  // Fixed setState ({isOpen: isOpen}) to => {isOpen: !isOpen}.
  // Added (export) to the component (Example Navbar) .
  // Added a default value to the Arg (Label) 
  // restructured the function of toggle on click, to () => function-invoked()
  // Added text of Opened/Closed to the label of the button that triggers the toggle. to identify the current state.

  // If we want to create any async behaviours then it should be run in the componentDidMount cycle hook,
  // or the useEffect if it is a functional component.


   class Dropdown extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
    }
  
    toggle() {
      const {isOpen} = this.state;
  
      this.setState({isOpen: !isOpen});
      console.log('Toggle Triggered')
    }
  
    render() {
      const {isOpen} = this.state;
      const {label = 'Default Label'} = this.props;
  
      return (
        <div className="dropdown">
          <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={()=> this.toggle()}>{isOpen ? (label + ' Opened') : (label + ' Closed')} </button>
  
          <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} aria-labelledby={label} role="menu">
            {this.props.children}
          </ul>
        </div>
      );
    }
  }
  
   class DropdownItem extends PureComponent {
    render() {
      // TODO implement me

      return (
              <ul>
                <li><a href={this.props.href}>{this.props.text}</a></li>
              </ul>
      )
      
    }
  }
  
  export class ExampleNav extends PureComponent {
    render() {
      return (
        <nav>
          <a href="/page1">Page 1</a>
          <Dropdown label="More items">
            <DropdownItem href="/page2" text="Page 2">Page 2</DropdownItem>
            <DropdownItem href="/page3" text="Page 3">Page 3</DropdownItem>
            <DropdownItem href="/page4" text="Page 4">Page 4</DropdownItem>
          </Dropdown>
          <Dropdown label="Even more items">
            <DropdownItem href="/page5" text="Page 5">Page 5</DropdownItem>
            <DropdownItem href="/page6" text="Page 6">Page 6</DropdownItem>
          </Dropdown>
        </nav>
      );
    }
  }
  