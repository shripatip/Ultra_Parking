import { Typography, Stack, Card, CardActions, Button } from "@mui/material";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";

const DetailCard = ({ car, setPark }) => {
  return (
    <div>
      <Card className="car-preview" key={car.id} sx={{ opacity: 0.9 }}>
        <Stack direction="row">
          <Typography
            ml={2}
            component="h5"
            sx={{ fontSize: "24px", color: "#666633" }}
          >
            {car.carNumber}
          </Typography>
          {!car.parked && (
            <Typography
              color="primary"
              component="h5"
              sx={{ fontSize: "24px", fontFamily: "monospace", ml: 28 }}
            >
              Cheaked out!
            </Typography>
          )}
        </Stack>
        <Typography sx={{ ml: "5.5px" }}>
          {" "}
          <span>Owner -</span> {car.ownerName}
        </Typography>
        <Stack direction="row">
          <Typography ml={2} component="h5" color="primary">
            {" "}
            Cheak In-
          </Typography>
          <Typography ml={1} component="h6" color="secondary">
            {car.cheakinTime}
          </Typography>
        </Stack>
        <CardActions sx={{ pt: 0, display: "flex" }}>
          <Button
            onClick={() => {
              setPark();
            }}
            sx={{
              ml: "auto",
              marginRight: "16px",
              background: "#666633",
              color: "#FFFFFF",
              "&:hover": { background: "black" },
            }}
            endIcon={<DirectionsCarFilledOutlinedIcon />}
            variant="outlined"
          >
            Chekout
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default DetailCard;
