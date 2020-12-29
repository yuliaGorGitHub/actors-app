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
import { InsertLinkRounded } from '@material-ui/icons';

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

function ActorComponent () {
    const classes = useStyles();
    const actor = new Actor("Brad","Pitt","2000-01-31","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_6"); 
    return(
        <>
            <Card  className={classes.root} >
                <CardHeader title={actor.fname + "  " + actor.lname} />
                <CardActions disableSpacing>
                    <IconButton  className={classes.media} >
                        <FavoriteIcon/>
                    </IconButton>
                </CardActions>
                <a href={actor.linkIMDB} target="_blank">
                    <CardMedia className={classes.media}                 
                      style={{ height: "317px" , width: "214px"}}  
                        image={actor.image}
                        title={actor.fname + "  " + actor.lname}
                    />
                </a>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Age {actor.age()}.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
};

export default ActorComponent;