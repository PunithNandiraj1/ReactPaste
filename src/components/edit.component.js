import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeFileName = this.onChangeFileName.bind(this);
    this.onChangeInputString = this.onChangeInputString.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      file_name: '',
      input_string: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                file_name: response.data.file_name, 
                input_string: response.data.input_string
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeFileName(e) {
    this.setState({
      file_name: e.target.value
    });
  }
  onChangeInputString(e) {
    this.setState({
      input_string: e.target.value
    })  
  }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      file_name: this.state.file_name,
      input_string: this.state.input_string
      };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update File</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>File Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.file_name}
                      onChange={this.onChangeFileName}
                      />
                </div>
                <div className="form-group">
                    <label>Input String: </label>
                    <textarea type="text" 
                      className="form-control"
                      value={this.state.input_string}
                      onChange={this.onChangeInputString}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Update File" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}