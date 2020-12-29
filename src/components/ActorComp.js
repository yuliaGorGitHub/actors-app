import './ActorComp.css';
import Actor from '../models/Actor';
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccountTree, InsertLinkRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        [theme.breakpoints.down("md")] : {
            maxWidth: 280
        },
        [theme.breakpoints.down("sm")] : {
            maxWidth: 200
        }
      },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    media: {
      height: 0,
      paddingTop: "2%",
      margin: "auto"
    }
  }));

function ActorComponent (props) {
    const {actor} = props;
    const curActor = new Actor(actor);
    const classes = useStyles();
    return(
        <>
            <Card  className={classes.root} >
                <a href={curActor.linkIMDB} target="_blank" className="p-ac-a">
                    <CardHeader title={curActor.fname + "  " + curActor.lname} />
                </a>
                <CardActions disableSpacing>
                    <IconButton  className={classes.media} >
                        <FavoriteIcon/>
                    </IconButton>
                </CardActions>
                <a href={curActor.linkIMDB} target="_blank">
                    <CardMedia className={classes.media}                 
                      style={{ height: "317px" , width: "214px"}}  
                        image={curActor.image}
                        title={curActor.fname + "  " + curActor.lname}
                    />
                </a>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Age {curActor.age()}.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
};

export default ActorComponent;