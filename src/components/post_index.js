import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts,posts => {
            return(
                <li key={posts.id} className="list-group-item">
                    {posts.title}
                </li>
            );
        })
    }

    render(){
        //console.log(this.props.posts);
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add A Post
                    </Link>
                </div>
               <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps,{fetchPosts})(PostIndex);

