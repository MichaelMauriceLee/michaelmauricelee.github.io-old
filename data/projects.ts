import IProjects from '../interfaces/IProjects';

const projects: Array<IProjects> = [
  {
    title: 'Social Media Web Application',
    codeUrl: 'https://github.com/MichaelMauriceLee/Connectivities',
    modalInfo: {
      imageUrl: '/images/projects/connectivities.JPG',
      description: [
        `Full stack social media web application similar to meetup.com,
        built using ASP .NET Core, Microsoft SQL Server,
        and React and deployed using Microsoft Azure.`,
        `Users can create and search for events and other like-minded users.
        In addition to its main functionality, users can leave comments on
        events and upload photos to their profile, as well as keep a list of followers.`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/connectivities_sm.JPG',
      description: 'Social media application similar to meetup.com',
    },
    webAppInfo: {
      isWebApp: true,
      webAppURL: 'https://connectivities.azurewebsites.net',
    },
  },
  {
    title: 'Next-Gen Japanese-English Dictionary Web Application',
    codeUrl: 'https://github.com/MichaelMauriceLee/chie',
    modalInfo: {
      imageUrl: '/images/projects/chie.JPG',
      description: [
        `Full stack Japanese-English dictionary web application with voice, image recognition, and Anki integration.
        Built using Remix, TailwindCSS, Azure Cognitive Services and deployed using Vercel.`,
        `Users can search up defintions of words in either Japanese or English and add them to Anki flashcards easily.
        Users can also upload images to do text recognition as well as audio for transcription`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/chie_sm.JPG',
      description: 'Japanese-English dictionary with voice recognition, image recognition, and Anki Integration',
    },
    webAppInfo: {
      isWebApp: true,
      webAppURL: 'https://www.chie.vercel.app/',
    },
  },
  {
    title: 'TensorFlow Real Time Object Detection Program',
    codeUrl: 'https://github.com/MichaelMauriceLee/FF14-Race-Identifer',
    modalInfo: {
      imageUrl: '/images/projects/ff14_race_identifer.JPG',
      description: [
        'Real time object detection of races from the game Final Fantasy 14.',
        `The frozen inference model was created by using Tensorflow's
        Object Detection API and retraining Google's
        faster_rcnn_inception_v2_coco_2018_01_28 model to detect any images
        on the computer screen of any character from Final Fantasy 14 and
        display the information of the character's race and gender on screen.`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/ff14_race_identifer_sm.JPG',
      description: 'Real time object detection of races from the game Final Fantasy 14.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Event-Driven Mobile Game Bot with GUI',
    codeUrl: 'https://github.com/MichaelMauriceLee/Shiny-Colors-Bot-1920-x-1080',
    modalInfo: {
      imageUrl: '/images/projects/shiny_colors_bot.JPG',
      description: [
        'Bot for the mobile game アイドルマスターシャイニ―カラーズ.',
        `Built using Python OpenCV, tkinter. This program opens up a GUI for users'
        to configure settings and allows the user to start and stop the program.
        The bot continually scans the play area, and when a series of buttons pops up,
        uses the mouse to click on the buttons in a set sequence. No files are
        injected into the game, as the bot uses on screen pixel data to make decisions.`,
        `Note that this program only works with screen resolutions around 1920 x 1080 px.
        The bot will only recognize images when around 80% of the image on screen matches
        the image stored in its database.`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/shiny_colors_bot_sm.JPG',
      description: 'Bot for the mobile game アイドルマスターシャイニ―カラーズ.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Tic-Tac-Toe',
    codeUrl: 'https://github.com/MichaelMauriceLee/Tic-Tac-Toe',
    modalInfo: {
      imageUrl: '/images/projects/tic-tac-toe.JPG',
      description: [
        'Tic-Tac-Toe game made in Java with AI players.',
        `The game runs in the terminal, asks for the names for the players,
        lets the human player choose the difficulty of the AI and then starts the game.`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/tic-tac-toe_sm.JPG',
      description: 'Tic-Tac-Toe game made in Java with AI players.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Student Registration App',
    codeUrl: 'https://github.com/MichaelMauriceLee/Student-Registration-App',
    modalInfo: {
      imageUrl: '/images/projects/student_rep_app.JPG',
      description: [
        'Student registration app for registering courses made in Java.',
        `The app runs in the terminal, asks for the user if they are one of
        the few registered students or the system admin, and then runs the app.`,
        `Features a main menu with abilities such as adding and removing course offerings,
        looking up courses offered this semester, and check grades.`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/student_rep_app_sm.JPG',
      description: 'Student registration app for registering courses. Made in Java.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Inventory Management App',
    codeUrl: 'https://github.com/MichaelMauriceLee/Inventory-Management-App',
    modalInfo: {
      imageUrl: '/images/projects/inventory_management.JPG',
      description: [
        'Retail store inventory management app, made in Java.',
        `The app runs in the terminal. At startup, the app parses data from tools.txt
        and suppliers.txt (which at like databases) and creates a list of these items
        to be used in the app.`,
        `Features a main menu with abilities such as checking tool stock,
        creating orders and writing the orders to orders.txt.`,
      ],
    },
    cardInfo: {
      imageUrl: '/images/projects/inventory_management_sm.JPG',
      description: 'Retail store inventory management app. Made in Java.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
];

export default projects;
