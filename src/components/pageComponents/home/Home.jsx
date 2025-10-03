import { Box, Button, Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';


const pagesData = [
    {
        id: 1,
        title: "Get Started",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 2,
        title: "Community",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        title: "Visit Website",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    }
]

const blogsData = [
    {
        id: 1,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 2,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
    {
        id: 3,
        date: "Apr 18, 2024",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/home",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat quis ipsam omnis enim similique hic ad vero illo alias harum nemo"
    },
]

const Home = () => {
    return (
        <>
            <Typography variant='h4'>
                Home
            </Typography>

            <Grid container spacing={2} my={2}>
                {
                    pagesData && pagesData.map(({ id, title, link, description }) =>
                        <Grid key={`pageCard-${id}`} size={{ xs: 4 }}>
                            <Card variant="outlined">

                                <CardContent>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Typography variant="h5" component="div">
                                            {title}
                                        </Typography>
                                        <Link href={link}>
                                            <IconButton aria-label="delete">
                                                <OpenInNewOutlinedIcon />
                                            </IconButton>
                                        </Link>
                                    </Box>
                                    <Typography gutterBottom sx={{ fontSize: 14 }}>
                                        {description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }

            </Grid>

            <Typography variant='h5' my={2}>
                Latest Posts
            </Typography>
            <Grid container spacing={2} mb={2}>
                {
                    blogsData && blogsData.map(({ id, title, link, description, date }, index) =>
                        <Grid key={`blogCard-${id}-${index}`} size={{ xs: 6 }}>
                            <CardContent sx={{ p: 0 }}>
                                <Typography gutterBottom sx={{ fontSize: 14 }}>
                                    {date}
                                </Typography>
                                <Typography variant="h5" sx={{ mb: 1 }} component="div">
                                    {title}
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: 14 }}>
                                    {description}
                                </Typography>
                            </CardContent>
                            <Link href={link}>
                                <Button size="small" sx={{ color: "green", textTransform: "capitalize", p: 0 }}>Read full post</Button>
                            </Link>
                        </Grid>
                    )
                }

            </Grid>
        </>
    )
}

export default Home