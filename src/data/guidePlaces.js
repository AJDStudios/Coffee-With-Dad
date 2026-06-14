const guidePlaces = [
  {
    name: 'Darwin Centre Costa',
    type: 'Coffee shop',
    area: 'Darwin Shopping Centre',
    mode: 'Infant mode',
    summary:
      'A dependable infant-mode stop: easy pram access, useful facilities, and staff who handle parent chaos well.',
    facilities: {
      toilets: '1 standard + 1 accessible',
      changing: '1 in-store, backup downstairs in the centre',
      highChairs: 'Around 3',
      hotWater: 'Provided happily, without fuss',
    },
    ratings: [
      {
        icon: '🚼',
        label: 'Pram Access',
        verdict: 'easy',
        title: 'No problem',
        note:
          'Roll in like you own the place. Mostly straightforward, though a few spots may require someone to shift a chair.',
      },
      {
        icon: '👶',
        label: 'Changing Facilities',
        verdict: 'easy',
        title: 'No problem',
        note:
          'Stable and usable. Bring a cover, because you are still a parent with standards. Backup changing is available downstairs in the centre.',
      },
      {
        icon: '🍼',
        label: 'Bottle Support',
        verdict: 'easy',
        title: 'No problem',
        note: 'Hot water available without question. Staff are happy to help.',
      },
      {
        icon: '🤱',
        label: 'Breastfeeding Comfort',
        verdict: 'easy',
        title: 'No problem',
        note: 'Not uncommon, and not treated as a spectacle.',
      },
      {
        icon: '👥',
        label: 'Customer Tolerance',
        verdict: 'easy',
        title: 'No problem',
        note:
          'High tolerance. Baby noise does not seem to bother regulars much. Life continues.',
      },
      {
        icon: '🚨',
        label: 'Emergency Parent Score',
        verdict: 'easy',
        title: 'No problem',
        note:
          'If you need a change, feed, toilet and coffee, this is serviceable. You\’ve got this.',
      },
    ],
  },
  {
    name: 'Sushi Kaji',
    type: 'Restaurant',
    area: 'Shoplatch, Shrewsbury town centre',
    mode: 'Infant mode',
    summary:
      'Lovely food and staff who did try, but not naturally pram-friendly. Possible with planning, patience, and a willingness to be slightly in the way.',
    facilities: {
      toilets: 'Available',
      changing: 'Changing table available',
      highChairs: 'Unknown',
      hotWater: 'Not tested, but staff were accommodating',
    },
    ratings: [
      {
        icon: '🚼',
        label: 'Pram Access',
        verdict: 'avoid',
        title: 'Just no',
        note:
            'The pram had to be collapsed before we could realistically settle in. This is not a venue that was designed with prams in mind.',
        },
        {
        icon: '👶',
        label: 'Changing Facilities',
        verdict: 'easy',
        title: 'No problem',
        note:
            'Changing table available, which immediately earns credit because it was not necessarily expected from the layout.',
        },
        {
        icon: '🍼',
        label: 'Bottle Support',
        verdict: 'effort',
        title: 'With energy',
        note:
            'Not tested directly. Based on how accommodating the staff were, hot water would probably have been provided if asked.',
        },
        {
        icon: '🤱',
        label: 'Breastfeeding Comfort',
        verdict: 'effort',
        title: 'With energy',
        note:
            'Manageable, but the space does not naturally lend itself to feeling invisible with a baby.',
        },
        {
        icon: '👥',
        label: 'Customer Tolerance',
        verdict: 'easy',
        title: 'No problem',
        note:
            'We occupied a table for around thirty minutes waiting for friends to arrive and never felt rushed. Staff were patient and accommodating throughout.',
        },
        {
        icon: '🚨',
        label: 'Emergency Parent Score',
        verdict: 'easy',
        title: 'No problem',
        note:
            'Despite the pram challenges, we successfully handled everything we needed to. If parenting happens unexpectedly, the staff seem willing to work with you.',
      },
    ],
  },
];

export default guidePlaces;