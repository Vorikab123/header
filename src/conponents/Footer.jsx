import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid style={{backgroundColor: "#212529", color: '#fff'}}>
        <Container style={{display: "flex", justifyContent: 'space-around', padding: '10px'}}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, suscipit?</p>
    <input></input>
    <button>Add</button>
    <img style={{width: "100px"}} src="https://static.vecteezy.com/system/resources/previews/003/763/789/original/social-media-facebook-instagram-logos-social-media-icons-black-and-white-set-free-vector.jpg"></img>
        </Container>
    </Container>
    );
};

export default Footer;


