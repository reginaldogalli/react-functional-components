import React from "react";
import ReactDOM from "react-dom";

export const Testimonial = (props) => {
  const title = props.title;
  const author = props.author;
  const date = props.date;
  const stars = props.stars;
  const content = props.content;
  return (
    <div className="card">
      <h2>{title}</h2>
      <h5>
        Submitted by {author} on {date}
      </h5>
      <h5>{stars} / 5 Stars</h5>
      <p>{content}</p>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <Testimonial
        title="Great atmosphere!"
        author="Sheila S."
        date="11/10/20"
        stars={4}
        content="Great food, wait staff, and ambience. We'll be returning!"
      />
      <Testimonial
        title="Loved the Apps!"
        author="Kim Z."
        date="10/15/20"
        stars={3}
        content="The appetizers were fantastic, but the overall menu could be expanded."
      />
      <Testimonial
        title="Wow!"
        author="Sally T."
        date="12/30/21"
        stars={5}
        content="The ambiance was luxurious and the food was high scale."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));