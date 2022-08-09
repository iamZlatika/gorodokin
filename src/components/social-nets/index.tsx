import styled from '@emotion/styled'
import React from 'react'
import SocialNetItem from './social-net-item'

interface SocialNetItemsProps {
    element: string
}

const NetItems = styled.ul<SocialNetItemsProps>`
z-index: 2;
bottom: 10px;
flex-direction: row;
display: ${(props) => (props.element === "showcase-screen" && "flex")};
grid-column-start: ${(props) => (props.element === "showcase-screen" && `1`)};
grid-column-end: ${(props) => (props.element === "showcase-screen" && `1`)};
grid-row-start: ${(props) => (props.element === "showcase-screen" && `4`)};
grid-row-end: ${(props) => (props.element === "showcase-screen" && `4`)};
margin: ${(props) => (props.element === "showcase-screen" && `auto auto 30px 10px`)};
position: ${(props) => (props.element === "showcase-screen" && "static")};
display: ${(props) => (props.element === "showcase-mobile" && "none")};

display: ${(props) => (props.element === "footer-screen" && "flex")};
margin: ${(props) => (props.element === "footer-screen" && `0`)};
grid-column-start: ${(props) => (props.element === "footer-screen" && `1`)};
grid-column-end: ${(props) => (props.element === "footer-screen" && `3`)};
grid-row-start: ${(props) => (props.element === "footer-screen" && `3`)};
grid-row-end: ${(props) => (props.element === "footer-screen" && `3`)};
position: ${(props) => (props.element === "footer-screen" && "static")};
margin: ${(props) => (props.element === "showcase-mobile" && `auto auto 30px 10px`)};
display: ${(props) => (props.element === "footer-mobile" && "none")};
@media(max-width: 820px){  
    flex-direction: column;
    display: ${(props) => (props.element === "showcase-screen" && "none")}; 
    display: ${(props) => (props.element === "showcase-mobile" && "flex")}; 
    right:  ${(props) => (props.element === "showcase-mobile" && `40px`)};   
    position: ${(props) => (props.element === "showcase-mobile" && "absolute")}; 
    bottom:  ${(props) => (props.element === "showcase-mobile" && `10px`)}; 
    margin: ${(props) => (props.element === "showcase-mobile" && `auto auto 30px 10px`)};
    display: ${(props) => (props.element === "footer-screen" && "none")};  
    display: ${(props) => (props.element === "footer-mobile" && "flex")};  
    grid-column-start: ${(props) => (props.element === "footer-mobile" && `2`)};
    grid-column-end: ${(props) => (props.element === "footer-mobile" && `2`)};
    grid-row-start: ${(props) => (props.element === "footer-mobile" && `1`)};
    grid-row-end: ${(props) => (props.element === "footer-mobile" && `3`)}; 
    align-items: ${(props) => (props.element === "footer-mobile" && `flex-end`)}; 
    margin-right: ${(props) => (props.element === "footer-mobile" && `15px`)}; 

       
}
`

const SocialNetItems: React.FC<SocialNetItemsProps> = ({ element }) => {
    return (
        <NetItems
            element={element}
        >
            <SocialNetItem
                element={element} />
        </NetItems>
    )
}

export default SocialNetItems
