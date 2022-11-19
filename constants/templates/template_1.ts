import { TemplaeImage } from '../../utils/imageMapping'

export const TEMPLATE_1 = [
  {
    id: 'template_1',
    title: 'Photograph Floral',
    subtitle: 'Template 1',
    slug: 'photograph-floral',
    image: TemplaeImage,
    description:
      'A modern photograph Funeral Programme with minimalistic inside pages so you can focus on content and keep printing costs down.',
    pages: [
      {
        backgroundImage: '/backgrounds/alina-sofia-4FttS_QUqw8-unsplash.jpg',
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
          /*
          TwentyFour: {
            type: 'svg',
            colour: '#FFF',
            size: 1,
            opacity: 1,
            position: 'middle'
          } */
        },
      },
      {
        objects: {
          textOne: {
            type: 'text',
            font: 'Playfair Display',
            size: 96,
            colour: '#000',
            backgroundColour: '#FFF',
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
        objects: {
          textOne: {
            type: 'text',
            font: 'Playfair Display',
            size: 96,
            colour: '#000',
            backgroundColour: '#FFF',
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
        objects: {
          textOne: {
            type: 'text',
            font: 'Playfair Display',
            size: 96,
            colour: '#000',
            backgroundColour: '#FFF',
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
