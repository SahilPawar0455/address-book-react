import { Component } from "react";
import { Button } from "@mui/material";
import { withRouter, Link } from "react-router-dom";
import "./home.css"

class Home extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Person Details 
                            </div>
                            <Link to="/personDetails" >
                                <Button className="add-button" variant="outlined" color="success">+ Add Person</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Address</th>
                                    <th>city</th>
                                    <th>state</th>
                                    <th>pin code</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Home);