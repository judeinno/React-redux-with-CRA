import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class StarComponent extends React.Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1
        };
      }
     
      onStarClick(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating: nextValue});
      }
     
      render() {
        const { rating } = this.state;
        
        return (                
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        );
      }
    }

export default StarComponent;

