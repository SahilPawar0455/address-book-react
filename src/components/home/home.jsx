import { Component } from "react";
import { Button } from "@mui/material";
import { withRouter, Link } from "react-router-dom";
import "./home.css"
import PersonService from '../service/person';
import edit from "../../assets/icons/create-black-18dp.svg";
import deleteicon from "../../assets/icons/delete-black-18dp.svg";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person1: [],
        };
    }


    fetchData() {
        PersonService.findAllPerson().then((response) => {
            console.log(response.data.addressBook);
            this.setState({ person1: response.data.addressBook });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    deleteEmployee(personId) {
        PersonService.deletePerson(personId);
        window.location.reload();
    }

    updateEmployee(personId) {

        console.log("update Person");
        this.props.history.push(`personAddress/${personId}`);
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
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>city</th>
                                    <th>state</th>
                                    <th>pin code</th>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.person1.map((person,index) => (
                                    <tr key={`${index}`}>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.address}</td>
                                        <td>{person.city}</td>
                                        <td>{person.state}</td>
                                        <td>{person.zipcode}</td>
                                        <td>{person.phoneNo}</td>
                                        <td>
                                            <img onClick={() => { this.deleteEmployee(person.id) && this.fetchData() }} src={deleteicon} alt="delete" name={person.id} />
                                            <img onClick={() => { this.updateEmployee(person.id) }} src={edit} name={person.id} alt="edit" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Home);