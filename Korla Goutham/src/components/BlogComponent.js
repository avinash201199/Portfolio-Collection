import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {Card,CardActions,CardContent,CardMedia,Button,Typography, CardActionArea} from '@material-ui/core'


const BlogComponent = ({blog}) => {
    
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={blog.src}
            alt="green iguana"
          />
        </CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.desc}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
<Link target='_blank' to={{pathname:`${blog.blog}`}}>

        <Button size="small">Take a Look</Button>
</Link>
      </Card>
    );
}

export default BlogComponent
let Blog=styled(Link)`
/* width:calc(10rem+15vw); */
background: red;
/* height:20rem; */
color:black;
text-decoration:none;
border:2px solid red;
padding:1rem;
`