import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {
    Link,
    DirectLink,
} from 'react-scroll'
import Chapter1 from './Chapters/Chapter1';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const chapters = [
        'Chapter 1 : The Boy Who Lived',
        'Chapter 2 : The Vanishing Glass',
        'Chapter 3 : The Letters from No One',
        'Chapter 4 : The Keeper of Keys',
        'Chapter 5 : Diagon Alley',
        'Chapter 6 : The Journey from Platform Nine and Three-Quarters',
        'Chapter 7 : The Sorting Hat',
        'Chapter 8 : The Potions Master',
        'Chapter 9 : The Midnight Duel',
        'Chapter 10 : Hallowe\'en',
        'Chapter 11 : Quidditch',
        'Chapter 12 : The Mirror of Erised',
        'Chapter 13 : Nicholas Flamel',
        'Chapter 14 : Norbert the Norwegian Ridgeback',
        'Chapter 15 : The Forbidden Forest',
        'Chapter 16 : Through the Trapdoor',
        'Chapter 17 : The Man with Two Faces',
    ];

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Hogwarts Reader
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {['Inbox', 'Starred'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon><FlashOnIcon/></ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>

                <Typography align="center" variant="h1">Harry Potter</Typography>
                <Typography align="center" variant="h3">and the Philosopher's
                    Stone</Typography>


                <List>
                    {
                        chapters.map((eachChapter, index) =>
                                         <Link activeClass="active" className="chapters"
                                               to={eachChapter}
                                               spy={true} smooth={true}
                                               duration={500}>
                                             < ListItem button key={index}>
                                                 <ListItemIcon><FlashOnIcon/></ListItemIcon>
                                                 <ListItemText primary={eachChapter}/>
                                             </ListItem>
                                         </Link>
                        )
                    }
                </List>

                <Chapter1/>
            </main>
        </div>
    );
}
