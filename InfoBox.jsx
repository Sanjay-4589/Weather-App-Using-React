import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
export default function InfoBox({ info }) {
    let INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?s=1024x1024&w=is&k=20&c=QhEOtUgcu5E94FWjghUGyMZMUSF3DckCOvL7OqfgAVE="
    let COLD_URL = "https://images.unsplash.com/photo-1448376291983-098d7f9aa5c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBjb3VudHJpZXN8ZW58MHx8MHx8fDA%3D"
    let RAINY_URL = "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D"
    return (
        <div className='infobox'>
            <div className='cardContainer'>
                <br />
                <Card sx={{ maxWidth: 300, width: "100%" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? (
                                <ThunderstormIcon />
                            ) : info.temp > 15 ? (
                                <WbSunnyIcon />
                            ) : (
                                <AcUnitIcon />
                            )}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature: {info.temp}&deg;C</div>
                            <div>Humidity: {info.humidity}</div>
                            <div>Max Temp: {info.temp_max}&deg;C</div>
                            <div>Min Temp: {info.temp_min}&deg;C</div>
                            <div>The weather feels like: {info.feels_like}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
