export const CATEGORIES = [
  {
    id: 1,
    title: 'Закуски',
    img: 'https://s3-alpha-sig.figma.com/img/1977/bb8b/11d9d0aab1f5286838314ada53c2230d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D73xUPREQAcxLZDNraTALY3loMjTpeMo~j8rmunEQo3SXveI3WV0ycfYtbOXcKMyBzoIc12kIiGRmBpM1IxyFWJ7cY3I1HESzLwTzJlNKvdCe5ThAsPxVWib~pe8X6fwHfgUX1JNcMKWkXMUIh43v4HYsoMZOd5ml414ypRrD--zgX1q5z-X3gstYwuda33jT-iCPcm9cP2ZVxggp5~IqCzJMGEn1JYIZxk4va~4azKCDpoS-ZWw4PaDKi6AhaBERIrac88Wnm8aAbuhaocrcFl6zgCroFNmnneJLIbZyvt1eHJkWC-L7BwkAHCfj8QzFdgBc-p9uigsnNdxP03mgA__',
  },
  {
    id: 2,
    title: 'Основные блюда',
    img: 'https://s3-alpha-sig.figma.com/img/1245/0e6b/f9014b24fb12948402802ebac1f694fb?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zp8CaZxOusrtB0DUhvVPamFKt5wZyD5-v6LYJLyywBi2qG6j8B5gxR7xpCqUojdc6QIrfH0dGdQ8Xv0GSG2Dng0d9BiF0xOpThnutRIz6gU7Qxee-bwuw0w9rEhASX9zyyLTRBs7werjDmKZvff~ZipuY53vzngdIl4jh1Yz47HmPjP2N-Eg4BQTad2pso8vlUP~lo9i-6tWZL46PRhuQIaDfP-Bx0a5km6Y7YkJPTDzqRXAElcXLyBYpMg7eVwtr3NPHqLDGAAA-DXecU0N4evBENyZOW8936wQ7w4e~kWKvWfIyhB-692L702gzTWTTnkTpIkLJDOBBGsd0R9m1A__',
  },
  {
    id: 3,
    title: 'Десерты',
    img: 'https://s3-alpha-sig.figma.com/img/1de7/2b67/63af5560f485e1982ebbd93aea267825?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=doDnD1dEKympdzl3gS1huWAYAzGauMwUk4hMGJQRsbsX5bJ8IHM3thZ2RucENvAy3RKqjFsJkXt1c9mm7Trzh9Nd2uVyMEB4VjvYpinZIJXhzNdSbP4QpvLcuBSJZT-k3h1zXzPaLHyephJ3H9pKKNuupMVFto4BnZMGD2KBYkjERGXW9EyDtjGRxYwYp8Td8~WHfw8P4FhtLRu1eKpfvB0PbVtEe7UuPtBKVd-icwdYxGuF1wNVQU12AmavzqF3Njh1ntebgEooaFPS~8xPyv3lWFp~pPTjTsB4drqtwjsSqrYtiekQ-K3dvlQ7OlL3QxJnGJ7qPguj29BDhwW8Zg__',
  },
];

export const DISHES = [
  {
    id: 1,
    title: 'Жареные устрицы с соусом',
    description:
      'Обжаренные до золотистого цвета устрицы с соусом из белого вина.',
    price: '65$',
    category: CATEGORIES[0].title,
    img: 'https://s3-alpha-sig.figma.com/img/e810/45e9/1a97e14cd222c117f673f5f977a2c3b3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lH8iaxKqeaLdScjnYWQ4iD-1k78lQQ~zZWiGzOWHqPJ4T3ZLUF-oVHo-pejXIZwWVj9X~Yyjw4dP0LNl~O5QKMfiCRbici9bTDzq~wfdXSBsJlxiay4afkqs8cNcfI5ce17PrtWHOsyWw-pd8GU90jbflfkFTFQ3MCBRAZ-4vLOT7V2GtJMxGgBn2o-qim4i-6DI5oV7TCNqxPWTI7LnX9emvkaIm2m4ygMx7iaKB1i3J3LjktvDrFMxJnKfTneRpMjwbNrSavKRwcR6JrP3eDGKypNou6FBncSL--g9T5bjS-uSe~JZFDIqU~sdDsGCeFGqIYFouzAe9Ohv4aUFVw__',
  },
  {
    id: 2,
    title: 'Тартар из тунца с авокадо',
    description:
      'Нежный тартар из свежего тунца с авокадо, заправленный экзотическим соусом.',
    price: '50$',
    category: CATEGORIES[0].title,
    img: 'https://s3-alpha-sig.figma.com/img/1977/bb8b/11d9d0aab1f5286838314ada53c2230d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D73xUPREQAcxLZDNraTALY3loMjTpeMo~j8rmunEQo3SXveI3WV0ycfYtbOXcKMyBzoIc12kIiGRmBpM1IxyFWJ7cY3I1HESzLwTzJlNKvdCe5ThAsPxVWib~pe8X6fwHfgUX1JNcMKWkXMUIh43v4HYsoMZOd5ml414ypRrD--zgX1q5z-X3gstYwuda33jT-iCPcm9cP2ZVxggp5~IqCzJMGEn1JYIZxk4va~4azKCDpoS-ZWw4PaDKi6AhaBERIrac88Wnm8aAbuhaocrcFl6zgCroFNmnneJLIbZyvt1eHJkWC-L7BwkAHCfj8QzFdgBc-p9uigsnNdxP03mgA__',
  },
  {
    id: 3,
    title: 'Фуа-гра на подушке из яблок',
    description: 'Фуа-гра на тонких ломтиках сладких карамелизированных яблок.',
    price: '105$',
    category: CATEGORIES[0].title,
    img: 'https://s3-alpha-sig.figma.com/img/d3b9/0b68/0b03e7dbc3de9a02b89dba6c35f15340?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YQWeyD5Rj4ZRHdtVYpbkVyke8kOku2edpbwu6Y0xSUV0E4DpIjcpw4IpvmjHjo2~Kcjrw9lD5Lze8h4QHWLTD5uoWZCvqL6lM2MP-V3fn4IMCvvmaVZWBak9NgvnF4cCntouzsO4guNlDIVGOHve-WAdx6tN9WgIX6PKOKaPiCAHcozTOCe1FnSiKPAIpitPGyF3z9Ala9uK8SQfifY~Fwzwv0agtlNcDWqMp~OtiLTy7EIDF5Yv15hBvcPuTCZrYDAefTK37BtU1hxNTLjBwbJWSeyGyPQBcZf-vbrxZhJORwO2lwx1N53izSiAooEGLoo-mRhhLoocqJNv3P1Q8A__',
  },
  {
    id: 4,
    title: 'Крем-суп из белых трюфелей',
    description: 'Крем-суп из белых трюфелей с хрустящими гренками.',
    price: '65$',
    category: CATEGORIES[1].title,
    img: 'https://s3-alpha-sig.figma.com/img/1245/0e6b/f9014b24fb12948402802ebac1f694fb?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zp8CaZxOusrtB0DUhvVPamFKt5wZyD5-v6LYJLyywBi2qG6j8B5gxR7xpCqUojdc6QIrfH0dGdQ8Xv0GSG2Dng0d9BiF0xOpThnutRIz6gU7Qxee-bwuw0w9rEhASX9zyyLTRBs7werjDmKZvff~ZipuY53vzngdIl4jh1Yz47HmPjP2N-Eg4BQTad2pso8vlUP~lo9i-6tWZL46PRhuQIaDfP-Bx0a5km6Y7YkJPTDzqRXAElcXLyBYpMg7eVwtr3NPHqLDGAAA-DXecU0N4evBENyZOW8936wQ7w4e~kWKvWfIyhB-692L702gzTWTTnkTpIkLJDOBBGsd0R9m1A__',
  },
  {
    id: 5,
    title: 'Лобстер Термидор',
    description:
      'Лобстер, запеченный с сыром и мускатным орехом, с кремовым соусом.',
    price: '55$',
    category: CATEGORIES[1].title,
    img: 'https://s3-alpha-sig.figma.com/img/58e9/3fc9/80eab3957d3dcf4d0b53b9675bf546b4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wq0vydp9dWzWsZ1Oht1ZbPHXiZwYDXzRMe21wqR9suwblIcrmERCAMDTzMCacOjZJaJxDW4Nt4HlUlIq0XPB8qjR5AnO5WMlpvRQPHkypuEkW5L7xORkbVZf8lGPDGwphDoiakofmIoilp8SV9zVOk0F0sonP8M~eN5anOLXYCj2OahiLAaID0xWCeE4eGyvofxgiIJXhQ4Hc8Zy9xkVuqpett-4q2~8ui1Xb5l1TTBthrrepXwl3WcgWS3ehzBkpBHvbY0rFVamuZfW2tBn4OOSkUgRFtE4QJxqTEvUn~oW0WdzR3j1wvjoDzsMoVF5pScXIczrCmCqkdVuQ1sywg__',
  },
  {
    id: 6,
    title: 'Ризотто с морепродуктами',
    description: 'Ризотто с ассорти из морепродуктов и базиликом.',
    price: '105$',
    category: CATEGORIES[1].title,
    img: 'https://s3-alpha-sig.figma.com/img/d24f/2fe8/1b5b9a41fa2b1f0f4248ba5f01011e97?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TIg4S-8OhL2G0C8Mu3vOJiFVTT9X4QKntsjGMX2vnWniar5L-Z1mkODE2WhnMVvWEdhF0jgeUCwIg0Hs1tdlgospYqfXYq7lEyLl1SWhrP3e8FQ9MLoFF15f~rDLpMeANCaJD0OQ3bS~isY3iEWg-cBywZHSbiw9JYabOJ-c1q5RSghMfD6eb0Bp3hytq3rnnJsgxZJHchu2fYxzxG4kovjNUylUMel8vQkvGEt2bygNxBN7KPV~6zJhX7Q7iXbpoMYja2ZL9NLA1dZwV04c21QooYOXkoyqGifPL3qk6YjQyIZHw5pWRMLXBzLT~HxkNI6JxhNOOSQUZ2Re1DV01g__',
  },
  {
    id: 7,
    title: 'Крем-брюле с лавандой',
    description: 'Французское крем-брюле с лавандой и карамельной корочкой.',
    price: '65$',
    category: CATEGORIES[2].title,
    img: 'https://s3-alpha-sig.figma.com/img/7d05/5f06/89df6ee0f3e728d382896c1e5df0f215?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-3YR2dTrMAiqFBcRMf44-6XFI0zD7zURv8UFu3H0jEXI1gPiGPgOp8pWr-l7-6vLUpgDdVJLGXTEw5iWJH7tYMj-dxJyAC9mexdRU1FxbNzQrd9s8IX35HMk0GX7RvBb7Ds16OY4-QW6hclKc1d~T~Zs77AsQwVKOOegCxaqp0JBARiBUdGc5oNHf5t2Ir8QKIZJvW6f~Idpge-93C-NcnewiqbmcUEHQHmPhuRaGeTYF1BIKtKC~ZBhDgRLLpwNeGkNQlHjdqxS9rPLfiygDbLllf00m8nJdBQ7Qx4jxsfE5bXEh~PU-bbYfvzCq2GDwP9nKFaiQS0bQxFpBYAUw__',
  },
  {
    id: 8,
    title: 'Тирамису с амаретто',
    description: 'Итальянский десерт с маскарпоне, кофе и амаретто.',
    price: '50$',
    category: CATEGORIES[2].title,
    img: 'https://s3-alpha-sig.figma.com/img/cd2a/58ee/a4cf077b58c07ec2dc1a00cb9439ce01?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e~kzMkqXeyKgBA~IuOLc9PSS62zCuJ0FYGSC-aZGnM1welNzrVGdhhQdqU9h2TQNmx0fBdmnvRJOWbS-Hsjt64iUiPSnbBcRGtjWMvKg8PquCrs6oobH7IpT8Cffv~KkbzI5~WtVAL1ARypIvz9UGsCtxBnb4SvSwCrHjV8jO5vDG4R75ML~XdCcwRgOebNpKIXmsNKxpLjus1sakHoeSuBRNtNIU51LW-jifPmKtvk8OaLxoAkRyVqzCdDZv0V7ruzbXs~b-mR3MNa7R3WcyNEWDyirPMBc1wDoDMxWdW7TPI~hj3E2eqBULC6lxAW7sZHDtvqCX4DJx1w8cfhQ-A__',
  },
  {
    id: 9,
    title: 'Шоколадный фондан с мороженым шоколада',
    description: 'Шоколадный фондан с мороженым из белого шоколада.',
    price: '105$',
    category: CATEGORIES[2].title,
    img: 'https://s3-alpha-sig.figma.com/img/1de7/2b67/63af5560f485e1982ebbd93aea267825?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=doDnD1dEKympdzl3gS1huWAYAzGauMwUk4hMGJQRsbsX5bJ8IHM3thZ2RucENvAy3RKqjFsJkXt1c9mm7Trzh9Nd2uVyMEB4VjvYpinZIJXhzNdSbP4QpvLcuBSJZT-k3h1zXzPaLHyephJ3H9pKKNuupMVFto4BnZMGD2KBYkjERGXW9EyDtjGRxYwYp8Td8~WHfw8P4FhtLRu1eKpfvB0PbVtEe7UuPtBKVd-icwdYxGuF1wNVQU12AmavzqF3Njh1ntebgEooaFPS~8xPyv3lWFp~pPTjTsB4drqtwjsSqrYtiekQ-K3dvlQ7OlL3QxJnGJ7qPguj29BDhwW8Zg__',
  },
];

export const TRANSLATIONS = [
  {
    id: 1,
    title: 'Sunrisers Hyderabad',
    place: 'Delhi Capitals',
    time: '15.07 00:50',
    abbreviation: 'IPL',
  },
  {
    id: 2,
    title: 'Adelaide Crows',
    place: 'Melbourne Demons',
    time: '22.07 00:15',
    abbreviation: 'AFL',
  },
  {
    id: 3,
    title: 'Colorado Mammoth',
    place: 'Calgary Roughnecks',
    time: '28.07 00:05',
    abbreviation: 'NLL',
  },
  {
    id: 4,
    title: 'Hamilton Tiger-Cats',
    place: 'Montreal Alouettes',
    time: '30.07 00:00',
    abbreviation: 'CFL',
  },
];
