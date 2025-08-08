import photo1 from '@assets/pictures/gallery/POKOJ1.jpg'
import photo2 from '@assets/pictures/gallery/POKOJ2.jpg'
import photo3 from '@assets/pictures/gallery/KORYTARZ.jpg'
import photo4 from '@assets/pictures/gallery/SWIETLICA.jpg'
import photo5 from '@assets/pictures/gallery/IMPREZA2.jpg'
import photo6 from '@assets/pictures/gallery/IMPREZA4.jpg'

export const carouselOptions = {
  type: 'fade',
  autoplay: false,
  autoHeight: true,
  interval: 4000,
  rewind: true,
  easing: 'linear',
  pagination: false,
  intersection: {
    inView: {
      autoplay: true,
    },
    outView: {
      autoplay: false,
    },
  },
}

export const carouselPhotos = [photo1, photo2, photo3, photo4, photo5, photo6]
