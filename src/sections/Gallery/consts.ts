import photo1 from '@assets/pictures/gallery/POKOJ1.jpg'
import photo2 from '@assets/pictures/gallery/POKOJ2.jpg'
import photo3 from '@assets/pictures/gallery/KORYTARZ.jpg'
import photo4 from '@assets/pictures/gallery/SWIETLICA.jpg'
import photo5 from '@assets/pictures/gallery/IMPREZA2.jpg'
import photo6 from '@assets/pictures/gallery/IMPREZA4.jpg'

export const carouselOptions = {
  type: 'fade',
  autoplay: true,
  autoHeight: true,
  interval: 4000,
  rewind: true,
  easing: 'linear',
  pagination: false,
}

export const carouselPhotos = [
  { src: photo1, alt: 'Single person room' },
  { src: photo2, alt: 'Two-person room' },
  { src: photo3, alt: 'Common spaces' },
  { src: photo4, alt: 'Our common room' },
  { src: photo5, alt: 'Party in our common room' },
  { src: photo6, alt: 'School kids visit' },
]
