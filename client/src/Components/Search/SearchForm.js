import React, { Component } from "react";
import { Input, Button,FormInline } from "mdbreact";
import {withRouter} from "react-router-dom";



export class SearchForm extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className="text-center">
                <FormInline>

                        <div className="col-sm-10">
                            <input name="keyword" className="form-control w-100"/>
                        </div>
                        <div className="col-sm-2">
                            <Button type="submit" className="w-100">Search</Button>
                        </div>

                </FormInline>
            </div>
        )
    }
}

export default withRouter(SearchForm);