import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import "../personAddress/personAddress.css";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Person from '../service/person';

function PersonAddress() {
    const [formValue, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phoneNo: "",
        isUpdate: false,
    });

    const params = useParams();
    useEffect(() => {
        if(params.personId){
        getPersonId(params.personId);
        }
    }, [params.personId]);


    const getPersonId = (personId) => {
        Person.findPerson(personId).then((data) => {
            let obj = data.data.addressBook;
            setData(obj);
        })
    }

    const setData = (obj) => {
        setForm({
            ...formValue,
            ...obj,
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
            address: obj.address,
            city: obj.city,
            state: obj.state,
            zipcode: obj.zipcode,
            phoneNo: obj.phoneNo,
            isUpdate: true,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Save");

        let person = {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zipcode: formValue.zipcode,
            phoneNo: formValue.phoneNo,
        };

        if (formValue.isUpdate) {
            Person.updatePerson(params.id, person)
                .then((data) => {
                    var value = window.confirm(data);
                    if (value === true) {
                        alert("update successfull!");
                    } else {
                        window.location.reload();
                    }
                });
        } else {
            Person.createPerson(person).then((data) => {
                console.log("data added successfully ", data.data.addressBook);
                alert("data added successfully");
            })
        }
    }

    const reset = () => {
        setForm({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            phoneNo: "",
        });
    };

    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (

        <div>
            <div class="form-content">
                <form class="form" action="#" onsubmit="save(event);" onreset="reset();">
                    <div class="form-head">
                        <span class="form-head-text">PERSON ADDRESS FORM</span>
                        <span1 class="cross-icon">
                            <Link to="/home">
                                <CloseIcon color="error"></CloseIcon>
                            </Link>
                        </span1>
                    </div>
                    <div class="body">
                        <TextField fullWidth label="First Name" id="fullWidth" margin="normal" value={formValue.firstName} name="firstName" onChange={onNameChange} />
                        <TextField fullWidth label="Last Name" id="fullWidth" margin="normal" value={formValue.lastName} name="lastName" onChange={onNameChange} />
                        <TextField fullWidth label="Address" id="fullWidth" margin="normal" multiline Rows={4} value={formValue.address} name="address" onChange={onNameChange} />

                        <div1 class="row">
                            <div class="input-content">
                                <InputLabel id="demo-simple-select-label" margin="normal" >City</InputLabel>
                                <Select id="city" displayEmpty margin="normal"style={{width:'100%'}} label="city" value={formValue.city} name="city" onChange={onNameChange}>
                                    <MenuItem disabled value="">  Select State  </MenuItem>
                                    <MenuItem value="Achalpur">Achalpur</MenuItem>
                                    <MenuItem value="Ahiri">Ahiri</MenuItem>
                                    <MenuItem value="Ahmadnagar">Ahmadnagar</MenuItem>
                                    <MenuItem value="Ahmadpur">Ahmadpur</MenuItem>
                                    <MenuItem value="Airoli">Airoli</MenuItem>
                                    <MenuItem value="Ajra">Ajra</MenuItem>
                                    <MenuItem value="Akalkot">Akalkot</MenuItem>
                                    <MenuItem value="Akola">Akola</MenuItem>
                                    <MenuItem value="Akot">Akot</MenuItem>
                                    <MenuItem value="Alandi">Alandi</MenuItem>
                                    <MenuItem value="Alibag">Alibag</MenuItem>
                                    <MenuItem value="Allapalli">Allapalli</MenuItem>
                                    <MenuItem value="Amalner">Amalner</MenuItem>
                                    <MenuItem value="Amarnath">Amarnath</MenuItem>
                                    <MenuItem value="Ambad">Ambad</MenuItem>
                                    <MenuItem value="Ambajogai">Ambajogai</MenuItem>
                                    <MenuItem value="Amravati">Amravati</MenuItem>
                                    <MenuItem value="Amravati Division">Amravati Division</MenuItem>
                                    <MenuItem value="Anjangaon">Anjangaon</MenuItem>
                                    <MenuItem value="Anshing">Anshing</MenuItem>
                                    <MenuItem value="Arangaon">Arangaon</MenuItem>
                                    <MenuItem value="Artist Village">Artist Village</MenuItem>
                                    <MenuItem value="Arvi">Arvi</MenuItem>
                                    <MenuItem value="Ashta">Ashta</MenuItem>
                                    <MenuItem value="Kati">Kati</MenuItem>
                                    <MenuItem value="Morsi">Morsi</MenuItem>
                                    <MenuItem value="Mowad">Mowad</MenuItem>
                                    <MenuItem value="Mudkhed">Mudkhed</MenuItem>
                                    <MenuItem value="Mukher">Mukher</MenuItem>
                                    <MenuItem value="Mul">Mul</MenuItem>
                                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                                    <MenuItem value="Mumbai Suburban">Mumbai Suburban</MenuItem>
                                    <MenuItem value="Murbad">Murbad</MenuItem>
                                    <MenuItem value="Murgud">Murgud</MenuItem>
                                    <MenuItem value="Murtajapur">Murtajapur</MenuItem>
                                    <MenuItem value="Murud">Murud</MenuItem>
                                    <MenuItem value="Nagothana">Nagothana</MenuItem>
                                </Select>

                            </div>
                            <div class="input-content">
                                <InputLabel id="select-label" margin="normal">State</InputLabel>
                                <Select labelId="demo-simple-select-label" style={{width:'100%'}} displayEmpty margin="normal" id="state" label="state" value={formValue.state} name="state" onChange={onNameChange}>
                                    <MenuItem disabled value="">Select State</MenuItem>
                                    <MenuItem value="AP">Andra Pradesh</MenuItem>
                                    <MenuItem value="AR">Arunachal Pradesh</MenuItem>
                                    <MenuItem value="AS">Assam</MenuItem>
                                    <MenuItem value="BR">Bihar</MenuItem>
                                    <MenuItem value="CG">Chhattisgarh</MenuItem>
                                    <MenuItem value="GA">Goa</MenuItem>
                                    <MenuItem value="GJ">Gujarat</MenuItem>
                                    <MenuItem value="HR">Haryana</MenuItem>
                                    <MenuItem value="HP">Himachal Pradesh</MenuItem>
                                    <MenuItem value="JK">Jammu & Kashmir</MenuItem>
                                    <MenuItem value="JH">Jharkhand</MenuItem>
                                    <MenuItem value="KA">Karnataka</MenuItem>
                                    <MenuItem value="KL">Kerala</MenuItem>
                                    <MenuItem value="MP">Madhya Pradesh</MenuItem>
                                    <MenuItem value="MH">Maharashtra</MenuItem>
                                    <MenuItem value="MN">Manipur</MenuItem>
                                    <MenuItem value="ML">Meghalaya</MenuItem>
                                    <MenuItem value="MZ">Mizoram</MenuItem>
                                    <MenuItem value="NL">Nagaland</MenuItem>
                                    <MenuItem value="OR">Odisha</MenuItem>
                                    <MenuItem value="PB">Punjab</MenuItem>
                                    <MenuItem value="RJ">Rajasthan</MenuItem>
                                    <MenuItem value="SK">Sikkim</MenuItem>
                                    <MenuItem value="TN">Tamil Nadu</MenuItem>
                                    <MenuItem value="TE">Telangana</MenuItem>
                                    <MenuItem value="TR">Tripura</MenuItem>
                                    <MenuItem value="UK">Uttarakhand</MenuItem>
                                    <MenuItem value="UP">Uttar Pradesh</MenuItem>
                                    <MenuItem value="WB">West Bengal</MenuItem>
                                    <MenuItem value="AN">Andaman and Nicobar</MenuItem>
                                    <MenuItem value="CH">Chandigarh</MenuItem>
                                    <MenuItem value="DH">Dadara and Nagar Haveli</MenuItem>
                                    <MenuItem value="DD">Daman and Diu</MenuItem>
                                    <MenuItem value="DL">Delhi</MenuItem>
                                    <MenuItem value="LK">Ladakh</MenuItem>
                                    <MenuItem value="LD">Lakshadweep</MenuItem>
                                    <MenuItem value="PY">Puducherry</MenuItem>
                                </Select>
                            </div>
                            <div class="input-content1">
                                <TextField label="Pin Code" margin="normal" value={formValue.zipcode}style={{width:'100%'}} name="zipcode" onChange={onNameChange} />
                            </div>
                        </div1>
                        <TextField fullWidth label="Phone Number" margin="normal" value={formValue.phoneNo}name="phoneNo" onChange={onNameChange} />
                        <div class="add-reset">
                            <Button type="submit" variant="contained" class="addButton" id="addButton" color="success" onClick={onSubmit}>{formValue.isUpdate ? 'Update' : 'Submit'}</Button>
                            <Button type="reset" variant="outlined" class="resetButton" id="resetButton" color="error" onClick={reset}>Reset</Button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default PersonAddress;