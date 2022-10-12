import React from 'react'
import styled from 'styled-components'
import Powers from './Power'
import Photo from "./logo192.png";
import { MyBlogs } from './MyBlogs';
import BlogComponent from './BlogComponent'
import {motion} from 'framer-motion'
const Blog = () => {
  console.log(MyBlogs)
  
  return (
    <Container
      initial={{ width: 0,height:0 }}
      animate={{ width: "100%",height:'200vh' }}
      transition={{ type: "spring", duration: 0.3 }}
    >
      <Head>
        <Powers />
      </Head>
      <Center>
        <motion.h3
          initial={{ y: -200 }}
          animate={{ y: 0, transition: { type: "spring", duration: 1.3 } }}
        >
          Iam New to Blogs I Just now started here  ,   are my few blogs
        </motion.h3>
        <Grid>
          {MyBlogs.map((blog) => (
            <BlogComponent key={blog.id} blog={blog} />
          ))}
        </Grid>
      </Center>
    </Container>
  );
}

export default Blog
let Container = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  transition:2s ease;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ322y5cp_L60d7_wAiK5hYDSIloUiFI9rvzA&usqp=CAU");
   background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; ;
  background-size:cover;
`;
let Head=styled.div`
padding:2rem;
`
let Center=styled.div`
display:flex;
justify-content:center;
text-align:center;
align-items:center;
flex-direction: column;
padding-top:10rem;

`
let Grid =styled.div`

display:grid;
grid-template-columns: repeat(2,minmax(15vw,1fr));
grid-gap:2vw;
`