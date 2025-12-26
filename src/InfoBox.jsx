import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}) {
    const INIT_URI = "https://images.unsplash.com/photo-1764957079188-149010d00e30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URI = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URI = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URI = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={InfoBox.humidity > 80 ? RAIN_URI : (info.temp > 59 ? HOT_URI : COLD_URI)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            InfoBox.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 59 ? <SunnyIcon/> : <AcUnitIcon/>)
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div>Temperature: {info.temp}°F</div>
         <div>Min Temp: {info.tempMin}°F</div>
         <div>Max Temp: {info.tempMax}°F</div>
         <div>Humidity: {info.humidity}%</div>
         <div>The Weather can be described as {info.weather} Feels Like: {info.feelslike}°F</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}