import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {createPost} from '../actions';


class NewPost extends Component{

    renderField(field){

        const {meta : {touched,error}} = field;
        const classForm = `form-group ${touched && error ? 'has-danger' : ''}`;
        

        return(
            <div className={classForm}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ?  error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
        this.props.createPost(values,() => {
            this.props.history.push("/");
        });
    }

    render(){

        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title"
                    label="Title:"
                    component={this.renderField}
                />
                <Field 
                    label="Tags:"
                    name="tags"
                    component={this.renderField}
                />
                <Field 
                    label="Post content:"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title)
        errors.title = "Enter some title!!!";
    if(!values.tags)
        errors.tags = "Enter tags";
    if(!values.content)
        errors.content = "Enter content";

    return errors;
}

export default reduxForm(
{
    validate,
    form:'PostNewForm'
}
)(
    connect(null,{createPost})(NewPost)
);