import CardSlider from '../components/Carousel/Carousel'
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
}));
export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <CardSlider></CardSlider>
    </div>
  )
}
