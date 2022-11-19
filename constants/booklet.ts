const BOOKLET_SIZES = {
  a5: {
    width: 1748,
    height: 2480,
  },
}

export const BOOKLET = {
  disabled: false, // @TODO: disable editing after 7 days to stop misuse
  pages: [
    {
      title: 'Front Cover',
      active: true,
      fields: {
        textOne: {
          name: 'Heading',
          value: 'IN LOVING MEMORY OF',
          placeholder: 'In Loving Memory Of',
          type: 'text',
          required: true,
          error: false,
          order: 0,
        },
        textTwo: {
          name: 'Name',
          value: 'Joe Bloggs',
          placeholder: 'Joe Bloggs',
          type: 'text',
          required: true,
          error: false,
          order: 1,
        },
        textThree: {
          name: 'Details',
          value: '04 November 1945 - 01 June 2021',
          placeholder: '',
          type: 'textarea',
          required: true,
          error: false,
          order: 2,
        },
      },
      canvasImage: {
        width: BOOKLET_SIZES.a5.width,
        height: BOOKLET_SIZES.a5.height,
        originalWidth: BOOKLET_SIZES.a5.width,
        originalHeight: BOOKLET_SIZES.a5.height,
      },
      imageBase64: null,
    },
    {
      title: 'Insert Left',
      active: false,
      fields: {
        textOne: {
          name: 'Heading',
          value: 'Obituary',
          placeholder: '',
          type: 'text',
          required: true,
          error: false,
          order: 0,
        },
        textTwo: {
          name: 'Text',
          value:
            'Joe passed away peacefully at his home in Pudsey, Leeds and will be lovingly remembered by his wife of 45 years, Mary, his son James (Lisa) and his two grandchildren, Thomas and Lucy.\n\n' +
            'Joe taught history at a Secondary School in Leeds and was a lifelong Leeds United FC fan and season ticket holder.\n\n' +
            'The funeral service will be held at Cemetery Road, Pudsey, Leeds at 12pm on Sunday 25th February. All are welcome to attend. Please make any charitable donations to the Dogs Trust. Joe absolutely adored his labradors.',
          placeholder: '',
          type: 'textarea',
          required: true,
          error: false,
          order: 1,
        },
      },
      canvasImage: {
        width: BOOKLET_SIZES.a5.width,
        height: BOOKLET_SIZES.a5.height,
        originalWidth: BOOKLET_SIZES.a5.width,
        originalHeight: BOOKLET_SIZES.a5.height,
      },
    },
    {
      title: 'Insert Right',
      active: false,
      fields: {
        textOne: {
          name: 'Heading',
          value: 'Order of Service',
          placeholder: '',
          type: 'text',
          required: true,
          error: false,
          order: 0,
        },
        textTwo: {
          name: 'Text',
          value:
            'Entry music: Time to Say Goodbye\n' +
            '\n' +
            'Welcome: Barry Henderson\n' +
            '\n' +
            'First tribute: Mary Smith (Wife)\n' +
            '\n' +
            'Second tribute: James Smith (Son)\n' +
            '\n' +
            'Poem, "Grandad was the best": Lucy (Granddaughter)\n' +
            '\n' +
            'Commendation\n' +
            '\n' +
            'Blessing\n' +
            '\n' +
            'Exit music: Leeds United - Marching On Together',
          placeholder: '',
          type: 'textarea',
          required: true,
          error: false,
          order: 1,
        },
      },
      canvasImage: {
        width: BOOKLET_SIZES.a5.width,
        height: BOOKLET_SIZES.a5.height,
        originalWidth: BOOKLET_SIZES.a5.width,
        originalHeight: BOOKLET_SIZES.a5.height,
      },
    },
    {
      title: 'Back Cover',
      active: false,
      fields: {
        textOne: {
          name: 'Heading',
          value: 'Thank You',
          placeholder: '',
          type: 'text',
          required: true,
          error: false,
          order: 0,
        },
        textTwo: {
          name: 'Text',
          value:
            'Words of thanks seem inadequate after all the kindness that has been bestowed upon our family.\n\n' +
            'We thank you for the encouraging visits, the comforting calls, the lovely cards, the beautiful floral arrangements, and the sincere words of solace.\n\n' +
            'Following this service you are all welcome to share further memories of Joe over refreshments at Pudsey Sports & Social Club, Parkfield Terrace, Stanningley.',
          placeholder: '',
          type: 'textarea',
          required: true,
          error: false,
          order: 1,
        },
        textThree: {
          name: 'Credits',
          value: 'This booklet was created using www.funeralprogrammes.uk',
          placeholder: '',
          type: 'textarea',
          required: true,
          error: false,
          hidden: true,
          order: 2,
        },
      },
      canvasImage: {
        width: BOOKLET_SIZES.a5.width,
        height: BOOKLET_SIZES.a5.height,
        originalWidth: BOOKLET_SIZES.a5.width,
        originalHeight: BOOKLET_SIZES.a5.height,
      },
    },
  ],
}
