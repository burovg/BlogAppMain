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
            </div>
        );
    }

    render(){
        return(
            <form>
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
            </form>
        );
    }
}

export default reduxForm(
{
    form:'PostNewForm'
}
)(NewPost);