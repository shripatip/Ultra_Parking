import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import data from "./data/data.json"
import { format } from "date-fns";
import { Typography, Button } from '@mui/material'
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { TextField } from '@mui/material';


const Create = () => {
    const Parking = data.Parking;
    const [ownerName, setownerName] = useState('');
    const [carNumber, setCarNumber] = useState('');

    const [isPending, setPending] = useState(false);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [details, setDetail] = useState('');
    const [detailError, setDetailError] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [catagory, setCatagory] = useState('todos');

    const handleSubmit = (e) => {
        setPending(true);
        e.preventDefault();
        let current = new Date();
        let cDate = format(current, "dd MMM yy ");
        let cTime = current.getHours() + ":" + current.getMinutes();
        let cheakinTime = cDate + ' ' + cTime;



        const carDetails = { ownerName, carNumber, cheakinTime, parked: true };
        if (carDetails) {
            data.Parking.push(carDetails);
            setPending(false)
            navigate('/');
        }

    }

    return (
        <div className="create">
            <Typography sx={{
                fontSize: "40px", opacity: 0.9,
                fontWeight: "550", textAlign: "center", color: "white"
            }}
            >Park Vehicle!</Typography>
            <form onSubmit={handleSubmit} autoComplete="off" >


                <TextField
                    value={ownerName}
                    onChange={(e) => {
                        setownerName(e.target.value)
                    }}
                    InputLabelProps={{
                        sx: {
                            fontSize: "20px",
                            color: "white",
                            [`&.${inputLabelClasses.shrink}`]: {
                                color: "white"
                            }
                        }
                    }}
                    sx={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: "100%",

                        " & .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        " & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        }
                    }}
                    required
                    textDecoration="none"


                    label="Note Title"
                    error={titleError} />
                <TextField

                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                    required
                    InputLabelProps={{
                        sx: {
                            fontSize: "20px",
                            color: "white",
                            [`&.${inputLabelClasses.shrink}`]: {
                                color: "white"
                            }
                        }
                    }}
                    sx={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                        fontSize: "16px",

                        " & .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        " & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        }
                    }}
                    textDecoration="none"
                    multiline
                    minRows="2"
                    placeholder="UP-78-AV-6322"
                    variant="outlined"
                    label="Vehicle Number"
                    error={detailError} />


                {!isPending && <Button
                    variant='contained'
                    type='submit'
                    size="large"
                    mt={8}
                    color='secondary'
                    sx={{ background: "#FFFFFF", color: "#666633", fontWeight: "600", "&:hover": { background: "#990033", color: "#FFFFFF" } }}
                    endIcon={<LocalParkingOutlinedIcon />}
                >
                    PARK!
                </Button>}
            </form>
        </div >
    );
}
export default Create;