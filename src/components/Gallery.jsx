import React from 'react';
import TourCard from './TourCard';

const tours = [
    { id: 1, title: 'Beach Paradise', description: 'Enjoy the sunny beaches and crystal-clear waters.' },
    { id: 2, title: 'Mountain Adventure', description: 'Explore the majestic mountains and scenic trails.' },
    { id: 3, title: 'City Lights', description: 'Experience the vibrant city life and cultural landmarks.' },
];

const Gallery = () => {
    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} title={tour.title} description={tour.description} />
            ))}
        </div>
    );
};

export default Gallery;