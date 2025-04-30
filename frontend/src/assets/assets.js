import about_image from './about_image.svg'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import avatar_icon from './avatar_icon.png'
import header_image from './header_image.png'
import arrow_icon from './arrow_icon.svg'
import chats_icon from './chats_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import footer_image from './footer_image.svg'
import group_profiles from './group_profiles.png'
import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import logo_gymmate from './logo_gymmate.svg'
import instagram_icon from './instagram_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_11 from './profile_img_11.svg'
import profile_pic from './profile_pic.png'
import upload_area from './upload_area.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import new_flag from './new_flag.svg'
import soon_flag from './soon_flag.svg'
import logo_footer from './logo_footer.svg'
import simple_logo from './simple_logo.png'
import turkish_flag from './turkish_flag.png'

import Cardio_Training from './Cardio_Training.png'
import Mobility_Training from './Mobility_Training.png'
import Strength_Training from './Strength_Training.png'
import Rehabilitation from './Rehabilitation.png'
import Personal_Training from './Personal_Trainer.png'
import Sports_Training from './Sports_Training.png'

import Martial_Arts_Training from './Martial_Arts_Training.png'
import Group_Couple_Training from './Group_Couple_Training.png'
import Yoga from './Yoga.png'
import Nutrition_Consulting from './Nutrition_Consulting.png'

import gallery_maybe from './gallery_maybe.jpg'
import gallery1 from './gallery1.jpg'
import gallery2 from './gallery2.jpg'
import gallery4 from './gallery4.jpg'
import gallery5 from './gallery5.jpg'
import gallery6 from './gallery6.jpg'
import gallery7 from './gallery7.jpg'
import gallery9 from './gallery9.jpg'
import gallery10 from './gallery10.jpg'
import gallery13 from './gallery13.jpg'

import trainer_one from './trainer_one.png'
import trainer_two from './trainer_two.png'
import trainer_three from './trainer_three.png'
import trainer_four from './trainer_four.png'
import trainer_five from './trainer_five.png'
import trainer_six from './trainer_six.png'
import trainer_seven from './trainer_seven.png'
import trainer_eight from './trainer_eight.png'
import trainer_nine from './trainer_nine.png'
import trainer_ten from './trainer_ten.png'


export const assets = {
    about_image,
    stripe_logo,
    razorpay_logo,
    avatar_icon,
    header_image,
    arrow_icon,
    chats_icon,
    dropdown_icon,
    footer_image,
    group_profiles,
    verified_icon,
    info_icon,
    upload_icon,
    logo_gymmate,
    instagram_icon,
    facebook_icon,
    twitter_icon,
    profile_img_11,
    upload_area,
    profile_pic,
    new_flag,
    soon_flag,
    menu_icon,
    cross_icon,
    logo_footer,
    simple_logo,
    turkish_flag,

    gallery_maybe,
    gallery1,
    gallery2,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery9,
    gallery10,
    gallery13,
   
}

export const specialityData = [
    {
        speciality: 'Personal Trainer',
        image: Personal_Training
    },
    {
        speciality: 'Strength Trainer',
        image: Strength_Training
    },
    {
        speciality: 'Sports Trainer',
        image: Sports_Training
    },
    {
        speciality: 'Rehabilitation Trainer',
        image: Rehabilitation
    },
    {
        speciality: 'Mobility Trainer',
        image: Mobility_Training
    },
    {
        speciality: 'Cardio Trainer',
        image: Cardio_Training
    },

    {
        speciality: 'Yoga Trainer',
        image: Yoga
    },
    {
        speciality: 'Group | Couple Trainers',
        image: Group_Couple_Training
    },
    {
        speciality: 'Nutrition Consulting',
        image: Nutrition_Consulting
    },
    {
        speciality: 'Martial Arts Trainer',
        image: Martial_Arts_Training
    },
]  


export const trainers = [ 
    {
        _id: 'trainer1',
        name: 'Cristian Ionescu',
        image: trainer_five, 
        speciality: ['Personal Trainer', 'Sports Trainer'],
        degree: 'ACSM',
        experience: '10+ Years',
        about: 'Hey, I am Cristian Ionescu, a winter sports fitness specialist from Romania. I help skiers and snowboarders build strength, endurance, and balance to perform better on the slopes and prevent injuries. My training focuses on core stability, lower-body power, and agility, ensuring you stay strong in any terrain. Whether you are an athlete or a casual rider, I wll get you mountain-ready with a program that fits your goals!',
        fees: 60,
        address: {
            line1: 'Piatra Neamt',
            line2: 'Romania'
        }
    },
    {
        _id: 'trainer2',
        name: 'Bogdan Stancu',
        image: trainer_one,
        speciality: ['Personal Trainer', 'Sports Trainer', 'Strength Trainer'],
        degree: 'ISSA',
        experience: '12 Years',
        about: 'I am Bogdan Stancu from Bucharest, Romania, a strength and sports performance trainer dedicated to helping athletes and fitness enthusiasts reach peak performance. With a background in football conditioning and biomechanics, I design science-based training plans to maximize explosive power, agility, and recovery.',
        fees: 65,
        address: {
            line1: 'Bucharest',
            line2: 'Romania'
        }
    },
    {
        _id: 'trainer3',
        name: 'Tomaž & Petra',
        image: trainer_two,
        speciality: 'Group | Couple Trainers',
        degree: 'NSCA',
        experience: '8+ Years',
        about: 'We are Tomaž and Petra from Ljubljana, the dynamic duo that brings energy and fun into group workouts. Our sessions are all about connection, teamwork, and pushing your limits together. Whether it is HIIT, bootcamps, or fun dance workouts, we make fitness social, effective, and motivating.',
        fees: 50,
        address: {
            line1: 'Ljubljana',
            line2: 'Slovenia'
        }
    },
    {
        _id: 'trainer4',
        name: 'Anđela Vuković',
        image: trainer_three,
        speciality: ['Yoga Trainer', 'Personal Trainer'],
        degree: 'RYT-500',
        experience: '7 Years',
        about: 'I am Anđela Vuković from Montenegro, and I combine personal training with yoga to create harmony between strength, flexibility, and mindfulness. My goal is to help you move pain-free, feel empowered in your body, and find inner peace while building lasting fitness habits.',
        fees: 55,
        address: {
            line1: 'Podgorica',
            line2: 'Montenegro'
        }
    },
    {
        _id: 'trainer5',
        name: 'Tebogo Ndlovu',
        image: trainer_four,
        speciality: 'Personal Trainer',
        degree: 'NSCA',
        experience: '9 Years',
        about: 'Hi, I am Tebogo Ndlovu from Nairobi, Kenya. My mission is to make fitness accessible and enjoyable for everyone. I focus on strength, endurance, and mobility with an emphasis on injury prevention and real-world movement. Whether you are just getting started or leveling up, I have your back!',
        fees: 45,
        address: {
            line1: 'Nairobi',
            line2: 'Kenya'
        }
    },
    {
        _id: 'trainer6',
        name: 'Elena Papadopoulou',
        image: trainer_ten,
        speciality: ['Mobility Trainer', 'Cardio Trainer'],
        degree: 'ACE',
        experience: '11 Years',
        about: 'I am Elena Papadopoulou from Athens, Greece, and I specialize in making your body move better and feel lighter. From heart-healthy cardio to joint-friendly mobility work, my programs are great for boosting energy, improving movement patterns, and staying active with ease and joy.',
        fees: 50,
        address: {
            line1: 'Athens',
            line2: 'Greece'
        }
    },
    {
        _id: 'trainer7',
        name: 'Emina Hodžić',
        image: trainer_six,
        speciality: 'Personal Trainer',
        degree: 'NFPT',
        experience: '6 Years',
        about: 'I am Emina from Sarajevo, Bosnia and Herzegovina. My training style is friendly, focused, and empowering. I help clients transform their habits, build strength, and gain confidence. Whether it is weight loss or toning, I tailor every session to your lifestyle and goals.',
        fees: 35,
        address: {
            line1: 'Sarajevo',
            line2: 'Bosnia and Herzegovina'
        }
    },
    {
        _id: 'trainer8',
        name: 'Mathieu Dupont',
        image: trainer_seven,
        speciality: 'Strength Trainer',
        degree: 'ACSM',
        experience: '13 Years',
        about: 'Bonjour! I am Mathieu from Lyon, France. I specialize in strength training for all levels, from beginners to athletes. With a scientific approach, I ensure safe progression, proper technique, and visible results. If you want to build strength and confidence, lets get started!',
        fees: 70,
        address: {
            line1: 'Lyon',
            line2: 'France'
        }
    },
    {
        _id: 'trainer9',
        name: 'Fahad Al-Mutairi',
        image: trainer_eight,
        speciality: 'Personal Trainer',
        degree: 'NASM',
        experience: '10 Years',
        about: 'I am Fahad from Kuwait City, Kuwait. I bring passion, discipline, and cultural awareness into fitness. My coaching style blends strength and functional training with a deep focus on mental resilience and self-discipline. Lets transform your health and mindset together.',
        fees: 60,
        address: {
            line1: 'Kuwait City',
            line2: 'Kuwait'
        }
    },
    {
        _id: 'trainer10',
        name: 'Camille Laurent',
        image: trainer_nine,
        speciality: ['Rehabilitation Trainer', 'Mobility Trainer'],
        degree: 'NASM',
        experience: '14 Years',
        about: 'Salut! I am Camille from Bordeaux, France. I specialize in rehab and fitness for recovery. Whether you are overcoming injury or managing chronic pain, I use a blend of physical therapy and fitness to help you regain mobility, strength, and confidence at your pace.',
        fees: 75,
        address: {
            line1: 'Bordeaux',
            line2: 'France'
        }
    }
];

