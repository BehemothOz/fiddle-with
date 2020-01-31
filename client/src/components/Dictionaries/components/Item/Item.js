import React from 'react';
import {
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const fomatDate = date => new Date(date).toUTCString()

const Item = props => {
    const { title, description, date, onEditClick } = props;

    const { url } = useRouteMatch();

    const history = useHistory();
    const styles = useStyles();

    const edit = () => onEditClick({ title, description });
    const handleAreaClick = () =>  history.push(`${url}/${props._id}`);

    return (
        <Card>
            <CardActionArea onClick={handleAreaClick}>
                <CardHeader
                    className={styles.header}
                    title={
                        <Typography className={styles.title}>
                            {title}
                        </Typography>
                    }
                    subheader={
                        <Typography variant="caption" color="textSecondary" className={styles.date}>
                            {fomatDate(date)}
                        </Typography>
                    }
                />
            </CardActionArea>
            <CardContent className={styles.content}>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions className={styles.actions}>
                <Button color="secondary" variant="text" size="small" onClick={edit}>Some</Button>
                <Button color="primary" variant="text" size="small" onClick={edit}>Edit</Button>
            </CardActions>
        </Card>
    )
};

export default Item;