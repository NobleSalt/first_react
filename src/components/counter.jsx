import React, { Component } from "react";
import "./counter.css";


class Counter extends Component {
  state = {
    count: 0,
    address: {
      name: "emma",
      imgUrl: "https://picsum.photos/200",
    },
    tags: ["tag1", "tag2", "tag3"],
  };

  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   styles = {
  //       fontWeight: 'bold',
  //       fontSize: 20
  //   }

  handleIncrement = (product) => {
    console.log("Increment Clicked !", this);
    // this.setState({count: this.state.count });
    // this.state.count++;
    console.log(product);
    this.setState({
      count: this.state.count + 1,
      countPlus: this.state.count + 3,
    });
  };

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>There are no tags available</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  doHandleIncrement = () => {
    this.handleIncrement({
      id: 1,
    });
  };

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <div>
        {this.renderTags()}
        <h1> count : {this.state.count} </h1>
        <h1> count : {this.state.countPlus} </h1>
        <p>{this.state.tags.length === 0 && "Please create a new tag!"}</p>
        <span>{this.renderTags()}</span>
        {/* 
onClick={()=>{
    this.handleIncrement({
      id:1
    });
  }}
 */}
        <button onClick={this.doHandleIncrement}>Click Me</button>
        or
        <button onClick={() => this.handleIncrement({ id: 0 })}>
          Click Me
        </button>
      </div>
      //   <React.Fragment>
      //     <span className={classes}>{ this.formatCount() }</span>
      //     <span >Badge</span>
      //     <p style={this.styles}>
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
      //       hic consectetur eaque. Reiciendis cumque deserunt doloribus atque.
      //       Totam quisquam officia repellat at. Blanditiis tenetur doloremque
      //       accusantium corrupti adipisci molestiae.
      //     </p>
      //     <ul>
      //         { this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
      //     </ul>
      //     <img src={this.state.address.imgUrl} alt="" srcset=""/>
      //     <button style={{padding: 9}}>Clickable</button>
      //   </React.Fragment>
    );
  }

  //   getBadgeClasses() {
  //     let classes = "badge badge-";
  //     classes += this.state.count === 0 ? "red" : "blue";
  //     return classes;
  //   }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
