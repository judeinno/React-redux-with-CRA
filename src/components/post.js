import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect  } from 'react-redux';
import { fetch_posts } from '../actions/postActions'


class Posts extends Component {
    componentWillMount() {
        this.props.fetch_posts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id }>
                <h3>{post.title }</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
        <div>
            <h1>Posts</h1> 
            {postItems }
        </div>
        )
    }
}

Posts.propTypes = {
    fetch_posts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
};

 const mapStateToProps = state => ({
     posts: state.posts.items,
     newPost: state.posts.item 
 });

export default connect(mapStateToProps, { fetch_posts })(Posts);
