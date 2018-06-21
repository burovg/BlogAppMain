import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost,deletePost} from '../actions';

class PostShow extends Component{

    componentDidMount(){
        if(!this.props.post){
            const {id} = this.props.match.params; 
            this.props.fetchPost(id);
        }
    }

    helper(){

    }

    onDeleteclick(){
        const {id} = this.props.match.params; 
        this.props.deletePost(id,() => {this.props.history.push("/");});
    }

    render(){


        const {post} = this.props;

        if(post == null){
            return(
                <div>Loading...</div>
            );
        }

        return(
            <div>
                <Link to="/">Back to index</Link>
                <button
                    onClick={this.onDeleteclick.bind(this)}
                    className="btn btn-danger pull-xs-right"
                >
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts},ownProps){

    const prm = {post : posts[ownProps.match.params.id]};
    console.log(prm);
    return prm;
    //return {post : posts[ownProps.match.params]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);