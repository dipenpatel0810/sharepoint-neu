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
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from 'react-scroll'
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/Chapter2';
import Chapter3 from './Chapters/Chapter3';
import Chapter4 from './Chapters/Chapter4';
import Chapter5 from './Chapters/Chapter5';
import Chapter6 from './Chapters/Chapter6';
import Chapter7 from './Chapters/Chapter7';
import Chapter8 from './Chapters/Chapter8';
import Chapter9 from './Chapters/Chapter9';
import Chapter10 from './Chapters/Chapter10';
import Chapter11 from './Chapters/Chapter11';
import Chapter12 from './Chapters/Chapter12';
import Chapter13 from './Chapters/Chapter13';
import Chapter14 from './Chapters/Chapter14';
import Chapter15 from './Chapters/Chapter15';
import Chapter16 from './Chapters/Chapter16';
import Chapter17 from './Chapters/Chapter17';

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

function scrollToTop() {
    scroll.scrollToTop();
}

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

    const [currentChapter, setCurrentChapter] =
        React.useState('Harry Potter and Philosopher\'s stone');

    const selectCurrentChapter = (chapter) =>
        setCurrentChapter(chapter);


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

                    <Typography variant="h6">
                        Currently Reading : {currentChapter}
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
                    <ListItem button>
                        <ListItemIcon><FlashOnIcon/></ListItemIcon>
                        <ListItemText primary="Back to Index" onClick={scrollToTop}/>
                    </ListItem>

                    {
                        chapters.map((eachChapter, index) =>
                                         <Link activeClass="active" className="chapters"
                                               to={eachChapter}
                                               spy={true} smooth={true}
                                               duration={500}
                                               onClick={() => selectCurrentChapter(eachChapter)}>
                                             < ListItem button key={index}>
                                                 <ListItemIcon><FlashOnIcon/></ListItemIcon>
                                                 <ListItemText primary={eachChapter}/>
                                             </ListItem>
                                         </Link>
                        )
                    }
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
                                               duration={500}
                                               onClick={() => selectCurrentChapter(eachChapter)}>
                                             < ListItem button key={index}>
                                                 <ListItemIcon><FlashOnIcon/></ListItemIcon>
                                                 <ListItemText primary={eachChapter}/>
                                             </ListItem>
                                         </Link>
                        )
                    }
                </List>

                <Chapter1/>
                <Chapter2/>
                <Chapter3/>
                <Chapter4/>
                <Chapter5/>
                <Chapter6/>
                <Chapter7/>
                <Chapter8/>
                <Chapter9/>
                <Chapter10/>
                <Chapter11/>
                <Chapter12/>
                <Chapter13/>
                <Chapter14/>
                <Chapter15/>
                <Chapter16/>
                <Chapter17/>

            </main>
        </div>
    );
}
