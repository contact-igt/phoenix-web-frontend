export interface Transformation {
  id: string
  name: string
  tag: string
  goal: string
  result: string
  quoteHook: string
  paragraph: string
  image: string
  alt: string
  imagePosition?: string
  video?: string
}

export const transformations: Transformation[] = [
  {
    id: 'vijay',
    name: 'Vijay',
    tag: 'Phoenix Fitness Member, 3-Year Journey',
    goal: 'Staying Consistent While Traveling',
    result: '3 Years and Still Going',
    quoteHook: 'Nowhere else feels like Phoenix.',
    paragraph:
      "I've been working out at Phoenix Fitness for the past 3 years. The atmosphere is airy, roomy, and motivating. The trainers are knowledgeable, helpful, and always there when you need support. I travel a lot, and every gym I visit reminds me that nowhere else feels like Phoenix. If you're serious about working out, I really recommend Phoenix Fitness.",
    image: '/images/home/testimonial1-image.png',
    alt: 'Vijay sharing his Phoenix Fitness testimonial',
    imagePosition: 'center center',
    video: '/images/home/testimonial1.mp4',
  },
  {
    id: 'dev',
    name: 'Dev',
    tag: 'Phoenix Fitness Member, 10-Month Journey',
    goal: 'Strength, Community & Convenience',
    result: '10 Months, Real Strength Gains',
    quoteHook: "I've seen a massive improvement in my strength.",
    paragraph:
      "I've been coming to Phoenix Fitness for around 10 months. I wanted a chill vibe, good crowd, good ambience, good music, and friendly trainers, and I found all of it here. The location is convenient, the equipment is really good, and the team has helped me since day one. I've seen massive improvement in my workouts and strength, and I look forward to coming in every day.",
    image: '/images/home/testimonial2-image.png',
    alt: 'Dev sharing his Phoenix Fitness testimonial',
    imagePosition: 'center center',
    video: '/images/home/testimonial2.mp4',
  },
  {
    id: 'deepa',
    name: 'Deepa',
    tag: 'Phoenix Fitness Member, 8-Month Journey',
    goal: 'Strength Over Just Looking Leaner',
    result: '8 Months of Consistency',
    quoteHook: 'Consistency is the key, and this place makes it happen.',
    paragraph:
      "I've been working out with Phoenix Fitness for the past 8 months, and this is one of the top-notch gyms in the vicinity. The team really supports you in achieving your fitness goals. For me, fitness is not just about getting leaner or how you appear. It is about getting stronger and staying consistent. Consistency is the key, and this place makes it happen.",
    image: '/images/home/testimonial3-image.png',
    alt: 'Deepa sharing her Phoenix Fitness testimonial',
    imagePosition: 'bottom center',
    video: '/images/home/testimonial3.mp4',
  },
  {
    id: 'rohit',
    name: 'Rohit',
    tag: 'Phoenix Fitness Member, New Member',
    goal: 'Restarting His Fitness Journey',
    result: 'Fully Recommitted, Months In',
    quoteHook: 'The equipment is world-class, and the setup feels premium.',
    paragraph:
      "I joined Phoenix Fitness when I wanted to restart my fitness journey, and it was exactly what I was looking for. The gym has a premium ambience, world-class equipment, and professional trainers who look after you well. It is a great place to work out, stay guided, and explore more in health and fitness.",
    image: '/images/home/testimonial4-image.jpg',
    alt: 'Rohit sharing his Phoenix Fitness testimonial',
    video: '/images/home/testimonial4.mp4',
  },
  {
    id: 'member-5',
    name: 'Phoenix Fitness Member',
    tag: 'Phoenix Fitness Member',
    goal: 'A Resolution That Actually Stuck',
    result: 'Still Showing Up Since January',
    quoteHook: 'My New Year resolution actually survived.',
    paragraph:
      "I joined Phoenix Fitness back in January, and my New Year resolution actually survived. The trainers are awesome, super helpful, and I feel stronger already. I love the vibe here. Come work out with us and experience it for yourself.",
    image: '/images/home/testimonial5-image.jpg',
    alt: 'Phoenix Fitness member sharing a New Year fitness resolution testimonial',
    video: '/images/home/testimonial5.mp4',
  },
  {
    id: 'member-6',
    name: 'Phoenix Fitness Member',
    tag: 'Phoenix Fitness Member',
    goal: 'A Fully-Equipped Gym Close to Home',
    result: 'Consistent Training Ever Since',
    quoteHook: "They're always there to spot you.",
    paragraph:
      "When I moved to this area, I was looking for a gym with all the equipment I needed. I found Phoenix Fitness to be the best gym here because it has complete equipment and multiple supportive trainers. They are always there to spot you, guide you, and give the support that matters during training.",
    image: '/images/home/testimonial6-image.jpg',
    alt: 'Phoenix Fitness member sharing a fully-equipped gym testimonial',
    video: '/images/home/testimonial6.mp4',
  },
]
