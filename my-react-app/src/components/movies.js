import {React,useState,useEffect} from "react";
import styled from "styled-components";



const ContainerDiv=styled.div`

   position:relative;
   display: inline-flex;
//   justify-content: space-between;
//   padding: 0 20px;
gap:20px;
   margin-left:30px;
    


`;

const CardDiv=styled.div`

  
overflow: clip;

    width :150px;
    height:200px;
    background-color:red;
    // margin:150px;
    transition: transform 0.5s ease-in-out;

    &:hover{
        transform: scale(1.8) ;
        img{
            height:75px;

        }
       
    }

    
    

`;

const Overlay = styled.div`
  margin-left:7px;
  position: relative;
  top:5px;
  bottom: 0px;
  
  height:auto;
  width: auto;
  // background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  // padding: 0px ;
`;

const Button = styled.button`
  width:100px;
  height:25px;
  background-color: green;
  color: #333;
  border: none;
  // padding: 5px 8px;
  cursor: pointer;
  border-radius: 5px;
`;

const Text = styled.p`
  color: #fff;
  margin: 0;
  padding: 5px 2px;
  font-size:8px;
  
`;

const SmallButton = styled.button`
border-radius: 5px;
  height:25px;
  width:30px;
  background-color: lightblue;
  color: #333;
  border: none;
  // padding: 4px 5px;  /* Adjust padding as needed */
  margin-left:5px;
  cursor: pointer;
`;
 const SmallText=styled.p`
  
 padding-top:5px;

  font-weight:bold;
  font-size:8px;
  text-align: justify;
 
 `;

 

 const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: black;
`;

const LeftButton = styled(ScrollButton)`
  left: 0;
`;

const RightButton = styled(ScrollButton)`
  right: 100px;
`;

const MovieList = ({ movieDataURL }) =>{

    const [imageUrls, setImageUrls] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    // const [visibleImages, setVisibleImages] = useState(7);
  
    const getData = async () => {
      try {
        const resp = await fetch(movieDataURL);
        const movies = await resp.json();
        
        // Extract image URLs from movie data
        const urls = movies.map(movie => movie.posterURL);
        
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      getData();
    }, [getData]);

    const handleLeftScroll = () => {
        setScrollPosition((prevPosition) =>
          Math.max(0, prevPosition - 6)
        );
      };
    
      const handleRightScroll = () => {
        setScrollPosition((prevPosition) =>
          Math.min(prevPosition + 6, imageUrls.length - 6)
        );
      };

      

    return(
        <>
        {/* <Heading>Family Movies</Heading> */}
<ContainerDiv>
    
{imageUrls.slice(scrollPosition, scrollPosition + 7).map((url, index)  => (

            <CardDiv  key={index + scrollPosition}
            onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <img key={index} src={url} alt={`Movie Poster ${index}`} height="200px" width="150px"/>

            {hoveredIndex === index+scrollPosition && (
            <Overlay>
              <Button>Click me</Button>
              <SmallButton>+</SmallButton>

              <SmallText>2024-2h.12m-Hindi-U/A16+</SmallText>
             
              <Text>From carefree college days to becoming a successful wedding
photographer, this coming-of-age story depicts the colours of
Arun Neelakandan's exciting life.</Text>
            </Overlay>
          )}
            </CardDiv>

            
))}


      <LeftButton onClick={handleLeftScroll}>{'<'}</LeftButton>
        <RightButton onClick={handleRightScroll}>{'>'}</RightButton>
</ContainerDiv>
</>

    )
}

export default MovieList;