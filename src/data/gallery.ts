export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface GalleryYear {
  year: string;
  images: GalleryImage[];
  blogspotUrl?: string;
}

export const galleryYears: GalleryYear[] = [
  {
    year: '2017',
    blogspotUrl: 'http://faactivities.blogspot.in/p/2017.html',
    images: [
      { src: '/images/gallery/2017/IMG-20170705-WA0003.jpg', width: 1200, height: 900, alt: 'FA4C activity 2017' },
      { src: '/images/gallery/2017/IMG-20170703-WA0035.jpg', width: 1200, height: 900, alt: 'FA4C activity 2017' },
      { src: '/images/gallery/2017/IMG-20170703-WA0010.jpg', width: 1200, height: 900, alt: 'FA4C activity 2017' },
      { src: '/images/gallery/2017/IMG-20170629-WA0001.jpg', width: 1200, height: 900, alt: 'FA4C activity 2017' },
      { src: '/images/gallery/2017/Bhavani.jpg', width: 1200, height: 900, alt: 'FA4C activity 2017' },
    ],
  },
  {
    year: '2016',
    blogspotUrl: 'http://faactivities.blogspot.in/p/2016.html',
    images: [
      { src: '/images/gallery/2016/IMG-20160606-WA0006-Copy.jpg', width: 1200, height: 900, alt: 'FA4C activity 2016' },
      { src: '/images/gallery/2016/IMG-20160531-WA0004.jpg', width: 1200, height: 900, alt: 'FA4C activity 2016' },
      { src: '/images/gallery/2016/IMG-20160526-WA0005.jpg', width: 1200, height: 900, alt: 'FA4C activity 2016' },
      { src: '/images/gallery/2016/IMG-20160511-WA0005.jpg', width: 1200, height: 900, alt: 'FA4C activity 2016' },
      { src: '/images/gallery/2016/IMG-20160223-WA0010.jpg', width: 1200, height: 900, alt: 'FA4C activity 2016' },
    ],
  },
  {
    year: '2015',
    blogspotUrl: 'http://faactivities.blogspot.in/p/2015.html',
    images: [
      { src: '/images/gallery/2015/IMG_20150703_124959.jpg', width: 1200, height: 900, alt: 'FA4C activity 2015' },
      { src: '/images/gallery/2015/IMG-20151228-WA0007.jpg', width: 1200, height: 900, alt: 'FA4C activity 2015' },
      { src: '/images/gallery/2015/IMG-20150730-WA0017.jpg', width: 1200, height: 900, alt: 'FA4C activity 2015' },
      { src: '/images/gallery/2015/IMG-20150702-WA0013.jpg', width: 1200, height: 900, alt: 'FA4C activity 2015' },
      { src: '/images/gallery/2015/IMG-20150417-WA0000.jpg', width: 1200, height: 900, alt: 'FA4C activity 2015' },
    ],
  },
  {
    year: '2014',
    blogspotUrl: 'http://faactivities.blogspot.in/p/2014.html',
    images: [
      { src: '/images/gallery/2014/IMG-20140921-WA0003.jpg', width: 1200, height: 900, alt: 'FA4C activity 2014' },
      { src: '/images/gallery/2014/IMG-20140727-WA0014.jpg', width: 1200, height: 900, alt: 'FA4C activity 2014' },
      { src: '/images/gallery/2014/IMG-20140624-WA0004.jpg', width: 1200, height: 900, alt: 'FA4C activity 2014' },
    ],
  },
  {
    year: '2013',
    images: [
      { src: '/images/gallery/2013/IMG_20130720_135652.jpg', width: 1200, height: 900, alt: 'FA4C activity 2013' },
      { src: '/images/gallery/2013/2013-08-05-13.13.31.jpg', width: 1200, height: 900, alt: 'FA4C activity 2013' },
      { src: '/images/gallery/2013/2013-02-14-23.49.51_resized.jpg', width: 1200, height: 900, alt: 'FA4C activity 2013' },
    ],
  },
];
