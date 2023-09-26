import React from 'react';
import ImageGallery from 'react-image-gallery';

const galleryImages = [
    {
        original: 'images/edc-orlando-DS.jpeg',
        thumbnail: 'images/edc-orlando-DS.jpeg',
        description: 'Demon Slayer themed outfits for EDC Orlando 2021.',
        originalHeight: '450px',
    },
    {
        original: 'images/NC-snowboard.jpg',
        thumbnail: 'images/NC-snowboard.jpg',
        description: 'Snowboarding at Beech Mountain, NC.',
        originalHeight: '450px',
    },
    {
        original: 'images/tampa-cafe.jpg',
        thumbnail: 'images/tampa-cafe.jpg',
        description: '2D Cafe in Tampa, FL',
        originalHeight: '450px',
    },
    {
        original: 'images/times-square.jpg',
        thumbnail: 'images/times-square.jpg',
        description: 'Just your typical generic photo in Times Square.',
        originalHeight: '450px',
    },
    {
        original: 'images/tufting-slowbro.jpg',
        thumbnail: 'images/tufting-slowbro.jpg',
        description: `My girlfriend and I tufted a Slowbro Carpet together.`,
        originalHeight: '450px',
    },
    {
        original: 'images/iron-horse.jpg',
        thumbnail: 'images/iron-horse.jpg',
        description: `This is the locally famous Iron Horse Sculpute found off the campus of the University of Georgia.`,
        originalHeight: '450px',
    },
    {
        original: 'images/chicago-bean.jpg',
        thumbnail: 'images/chicago-bean.jpg',
        description: `Chicago Bean from Summer 2021`,
        originalHeight: '450px',
    },
    {
        original: 'images/optcg.jpg',
        thumbnail: 'images/optcg.jpg',
        description: `My friends and I have been deeply invested in the One Piece Trading Card Game. 
        It's based off our favorite show and gives us a competitive outlet to share. 
        The boxes on the table are booster boxes for the second set.`,
        originalHeight: '450px',
    },
    {
        original: 'images/lego-dragon.jpg',
        thumbnail: 'images/lego-dragon.jpg',
        description: `I've recently grown an interest in Legos and this Ninjago Water Dragon was my first project.`,
        originalHeight: '450px',
    },
    {
        original: 'images/racket-restring.jpg',
        thumbnail: 'images/racket-restring.jpg',
        description: `I've been an avid tennis player for 9 years and have been stringing my own rackets since being in high school.`,
        originalHeight: '450px',
    },
]
function GalleryPage() {
    return (
        <>
        <h2>Gallery</h2>
        <p>Some of trips I've gone on this year along with some hobbies I've started.</p>
        <article class="gallery">
            <ImageGallery items={galleryImages}/>
        </article>
        </>
    )
}
export default GalleryPage;