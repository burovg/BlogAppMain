import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';

class NewPost extends Component{

    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
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
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title)
        errors.title = "Enter some title!!!";

    return errors;
}

export default reduxForm(
{
    validate,
    form:'PostNewForm'
}
)(NewPost);