import { TemplaeImage2 } from '../../utils/imageMapping'

export const TEMPLATE_2 = [
  {
    id: 'template_2',
    title: 'Watercolour Floral',
    subtitle: 'Template 2',
    slug: 'watercolour-floral',
    image: TemplaeImage2,
    description:
      'A beautiful light green watercolour Funeral Programme. Celebrate the life of your loved one with a touch of nature.',
    pages: [
      {
        backgroundImage: '/backgrounds/floral-front-cover.jpg',
        objects: {
          textOne: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 72,
            colour: '#000',
            backgroundColour: '#FFF',
            position: 'topMiddle',
          },
          textTwo: {
            type: 'text',
            font: 'Playfair Display',
            size: 190,
            colour: '#000',
            position: {
              top: 350,
              left: 'center',
            },
          },
          textThree: {
            type: 'textarea',
            font: 'Cormorant Garamond',
            size: 72,
            colour: '#000',
            backgroundColour: '#FFF',
            position: 'bottomMiddle',
          },
        },
      },
      {
        backgroundImage: '/backgrounds/floral.jpg',
        objects: {
          textOne: {
            type: 'text',
            font: 'Playfair Display',
            size: 96,
            colour: '#000',
            backgroundColour: 'transparent',
            position: 'topMiddle',
          },
          textTwo: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 54,
            colour: '#000',
            position: {
              top: 500,
              left: 'center',
            },
          },
          textThree: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 72,
            colour: '#000',
            backgroundColour: '#FFF',
            position: 'bottomMiddle',
          },
          TemplateOneDivider: {
            type: 'svg',
            colour: '#000',
            size: 3,
            opacity: 1,
            position: {
              top: 340,
              left: 'center',
            },
          },
        },
      },
      {
        backgroundImage: '/backgrounds/floral.jpg',
        objects: {
          textOne: {
            type: 'text',
            font: 'Playfair Display',
            size: 96,
            colour: '#000',
            backgroundColour: 'transparent',
            position: 'topMiddle',
          },
          textTwo: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 54,
            colour: '#000',
            position: {
              top: 500,
              left: 'center',
            },
          },
          textThree: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 72,
            colour: '#000',
            backgroundColour: '#FFF',
            position: 'bottomMiddle',
          },
          TemplateOneDivider: {
            type: 'svg',
            colour: '#000',
            size: 3,
            opacity: 1,
            position: {
              top: 340,
              left: 'center',
            },
          },
        },
      },
      {
        backgroundImage: '/backgrounds/floral.jpg',
        objects: {
          textOne: {
            type: 'text',
            font: 'Playfair Display',
            size: 96,
            colour: '#000',
            backgroundColour: 'transparent',
            position: 'topMiddle',
          },
          textTwo: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 54,
            colour: '#000',
            position: {
              top: 500,
              left: 'center',
            },
          },
          textThree: {
            type: 'text',
            font: 'Cormorant Garamond',
            size: 36,
            colour: '#666',
            backgroundColour: '#FFF',
            position: 'bottomMiddle',
          },
          TemplateOneDivider: {
            type: 'svg',
            colour: '#000',
            size: 3,
            opacity: 1,
            position: {
              top: 340,
              left: 'center',
            },
          },
        },
      },
    ],
  },
]
