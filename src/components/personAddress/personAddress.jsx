import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import "../personAddress/personAddress.css";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function PersonAddress() {


    return (

        <div>
            <div class="form-content">
                <form class="form" action="#" onsubmit="save(event);" onreset="reset();">
                    <div class="form-head">
                        <span class="form-head-text">PERSON ADDRESS FORM</span>
                        <span1 class="cross-icon">
                            <CloseIcon color="error"></CloseIcon>
                            {/* <a href="../pages/new_addressbook.html"></a> */}
                        </span1>
                    </div>
                    <div class="body">
                        <TextField fullWidth label="Full Name" id="fullWidth" margin="normal" />
                        <TextField fullWidth label="Address" id="fullWidth" margin="normal" multiline Rows={4} />

                        <div1 class="row">
                            <div class="input-content">
                                <InputLabel id="demo-simple-select-label" margin="normal" >City</InputLabel>{'\n'}
                                <Select id="city" margin="normal" autoWidth label="city">
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
                                <InputLabel id="select-label" margin="normal">State</InputLabel>{'\n'}
                                <Select labelId="demo-simple-select-label" margin="normal" id="state"  label="state">
                                    <option value="">Select State</option>
                                    <option value="AP">Andra Pradesh</option>
                                    <option value="AR">Arunachal Pradesh</option>
                                    <option value="AS">Assam</option>
                                    <option value="BR">Bihar</option>
                                    <option value="CG">Chhattisgarh</option>
                                    <option value="GA">Goa</option>
                                    <option value="GJ">Gujarat</option>
                                    <option value="HR">Haryana</option>
                                    <option value="HP">Himachal Pradesh</option>
                                    <option value="JK">Jammu & Kashmir</option>
                                    <option value="JH">Jharkhand</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="KL">Kerala</option>
                                    <option value="MP">Madhya Pradesh</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="MN">Manipur</option>
                                    <option value="ML">Meghalaya</option>
                                    <option value="MZ">Mizoram</option>
                                    <option value="NL">Nagaland</option>
                                    <option value="OR">Odisha</option>
                                    <option value="PB">Punjab</option>
                                    <option value="RJ">Rajasthan</option>
                                    <option value="SK">Sikkim</option>
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="TE">Telangana</option>
                                    <option value="TR">Tripura</option>
                                    <option value="UK">Uttarakhand</option>
                                    <option value="UP">Uttar Pradesh</option>
                                    <option value="WB">West Bengal</option>
                                    <option value="AN">Andaman and Nicobar</option>
                                    <option value="CH">Chandigarh</option>
                                    <option value="DH">Dadara and Nagar Haveli</option>
                                    <option value="DD">Daman and Diu</option>
                                    <option value="DL">Delhi</option>
                                    <option value="LK">Ladakh</option>
                                    <option value="LD">Lakshadweep</option>
                                    <option value="PY">Puducherry</option>
                                </Select>
                            </div>

                            <div class="input-content">
                                <TextField label="Pin Code" margin="normal" />
                            </div>
                        </div1>
                        <TextField fullWidth label="Phone Number" margin="normal" />
                        <div class="add-reset">
                            <Button variant="contained" class="addButton" id="addButton" color="success">Add</Button>
                            <Button variant="outlined" class="resetButton" id="resetButton" color="error">Reset</Button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default PersonAddress;