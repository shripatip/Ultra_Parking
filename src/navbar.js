import { useNavigate } from "react-router-dom";
import { Typography, Stack, Button } from '@mui/material';

const Navbar = () => {
    const navigate = useNavigate();
    const pages = ["Home", "New Park"];
    return (
        <nav className="navbar">
            <Typography variant='h4' component="a"
                href="/" sx={{
                    fontFamily: 'monospace',
                    letterSpacing: '.1rem',
                    fontWeight: "500",
                    color: 'white',
                    textDecoration: 'none',
                }}>Ultra Parking</Typography>
            <div className="pages">
                <Stack direction="row">
                    {pages.map((page) => (
                        <Button
                            onClick={() => {
                                if (page == "Home") navigate("/")
                                else if (page === "New Park") {
                                    navigate('/create')
                                }
                            }}
                            key={page}
                            sx={{ my: 2, color: '#666633', display: 'block' }}>
                            {page}
                        </Button>
                    ))}
                </Stack>
            </div>
        </nav>

    );
}

export default Navbar;