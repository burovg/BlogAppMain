import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchPost} from '../actions';

class PostShow extends Component{

    componentDidMount(){
        const {id} = this.props.match.params; 
        this.props.fetchPost();
    }

    render(){
        return(
            <div>
                Post Show
            </div>
        );
    }
}

function mapStateToProps({posts},ownProps){
    return {posts};
}

export default connect(null,{fetchPost})(PostShow);