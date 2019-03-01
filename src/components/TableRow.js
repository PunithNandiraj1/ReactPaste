import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

var fileDownload = require('js-file-download');

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.download = this.download.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.location.reload();
    }
    download(){
      
        // const obj = {
        //     file_name: this.props.obj.file_name,
        //     input_string: this.props.obj.input_string
        //   };
        //   console.log(obj);
          axios.get('http://localhost:4000/business/download/'+this.props.obj._id)
            .then(res => fileDownload(res.data, this.props.obj.file_name))
            .catch(err => console.log(err))
            
    // onDownload(e){
    //     const obj = {
    //         file_name: this.props.obj.file_name,
    //         input_string: this.props.obj.input_string
    //       };
    // //       console.log(obj);
    //     axios.post('http://localhost:4000/business/download',
    //      obj)
    //       .then(res => console.log(res.data));
        // console.log(this.props.obj.input_string)
        // 

    }
  render() {
    
    return (
        <tr>
            
          <td>
            {this.props.obj.file_name}
          </td>
          <td>
            {this.props.obj.input_string}
          </td>
          <td>
           {/*<button className="btn btn-primary">Edit</button>*/}
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
          <td>
         <button onClick={this.download} className = " btn btn-download">Download</button>
         {/* <Link to={"/download/"+this.props.obj._id}className="btn btn-download">Download</Link> */}
         {/* <a href={'/temp.txt'+'/home/punith/Desktop/finale/src/api/temp.txt'} download>Click to download</a> */}
          </td>
          
        </tr>
    );
  }
}

export default TableRow;