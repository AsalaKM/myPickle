// load the mongo models
const ProfileQuestion = require("./models/ProfileQuestion")
const SupportType = require("./models/SupportType")
const User = require("./models/User")
const Profile = require("./models/Profile")
const ProfileAnswer = require("./models/ProfileAnswer")

// load profile questions build
const buildProfileQuestions = require("./buildProfileQuestions")

// load dbConnection
const dbConnection = require("./db_connection")

// load required functions
const registerUser = require("./queries/registerUser")

dbConnection()

const buildDb = async () => {
  // clear collections
  await User.deleteMany({})
  await SupportType.deleteMany({})
  await Profile.deleteMany({})
  await ProfileQuestion.deleteMany({})
  await ProfileAnswer.deleteMany({})

  // console.log("collections deleted")

  // insert profile questions
  await buildProfileQuestions()

  // insert users

  // therapist
  const therapist = await registerUser(
    "Josephine Doeski",
    "josephine@the-therapists.co.uk",
    "004407566683",
    "123456",
    false
  )

  console.log("new user", therapist)

  const generalUser = await registerUser(
    "Henry Poundinger",
    "henry@financial-advice.co.uk",
    "004407565473",
    "123456",
    false
  )

  console.log("new user", generalUser)

  // // therapist
  // const therapist = new User({
  //   name: "Josephine Doeski",
  //   phone: "004407566683",
  //   email: "josephine@the-therapists.co.uk",
  //   address: "66 Moaning Road E50DW London",
  //   password: "123456",
  // })
  // await therapist.save()
  // console.log("user (therapist) added")

  // general user
  // const generalUser = new User({
  //   name: "Henry Poundinger",
  //   phone: "004407565473",
  //   email: "henry@financial-advice.co.uk",
  //   address: "66 Chelsea Lane W2893W London",
  //   password: "123456",
  // })
  // await generalUser.save()
  // console.log("user (general) added")

  // get support type of therapists
  const supportTypeTherapist = await SupportType.findOne({ type: "Therapist" })

  // get support type of general users
  const supportTypeGeneral = await SupportType.findOne({ type: "General" })

  // create new profile for user with support type therapist and userid as foreign keys
  const therapistProfile = new Profile({
    supportType: supportTypeTherapist.id,
    user: therapist.id,
    approved: true,
  })

  await therapistProfile.save()
  // console.log("therapist profile added")

  // create new profile for user with support type general and userid as foreign keys
  const generalProfile = new Profile({
    supportType: supportTypeGeneral.id,
    user: generalUser.id,
    approved: true,
  })

  await generalProfile.save()
  // console.log("general profile added")

  // get all profile questions related to therapist type
  const therapistQuestions = await ProfileQuestion.find({ supportType: supportTypeTherapist.id })
  // get all profile questions related to general type
  const generalQuestions = await ProfileQuestion.find({ supportType: supportTypeGeneral.id })

  // create answers for therapist
  const therapistAnswers = await ProfileAnswer.insertMany([
    // ADMIN AREA ANSWERS
    {
      profile: therapistProfile.id,
      question: generalQuestions[0].id,
      answer: ["Emotional", "Social", "Spiritual"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[1].id,
      answer: "The Therapists London",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[2].id,
      answer: { address: "66 Moaning Road", city: "London", postcode: "E5 0DW" },
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[3].id,
      answer: "JUWH: AKFAFD788, DAAD: 24FRHUW9, THAK: ASLW20401",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[4].id,
      answer: [
        "Qualified therapy or counselling service",
        "Guidance and advice",
        "Self-help",
        "Activities",
      ],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[5].id,
      answer: "The Therapists London",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[6].id,
      answer: "private sector (for profit)",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[7].id,
      answer: "https://www.therapists-london.co.uk",
    },
    // profile picture to be dealt with later
    {
      profile: therapistProfile.id,
      question: generalQuestions[8].id,
      answer: "",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[9].id,
      answer: "We would love to hear your story and offer individual support",
    },
    // END OF THE INITIAL REGISTRATION PROCESS
    // START OF SOCIAL SECTION
    {
      profile: therapistProfile.id,
      question: generalQuestions[10].id,
      answer: "https://www.facebook.com/therapists-london",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[11].id,
      answer: "https://www.twitter.com/therapists-london",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[12].id,
      answer: "https://www.instagram.com/therapists-london",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[13].id,
      answer: "https://www.linkedin.com/therapists-london",
    },
    // END OF SOCIAL SECTION
    // START OF SUPPORT DETAILS
    {
      profile: therapistProfile.id,
      question: generalQuestions[14].id,
      answer: "We are there for you",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[15].id,
      answer: [
        "Confidence",
        "Life challenges",
        "Feelings & behaviours",
        "Personal development",
        "Living healthily",
        "Education & Employability",
        "Phobias",
        "Sleeping issues",
        "Traumatic events",
      ],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[16].id,
      answer: "For everyone who faces anxiety and stress and need emotional support",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[17].id,
      answer: ["Face to face & local", "Online e.g web chat", "Home visit"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[18].id,
      answer: ["Other"],
    },
    // profile pic to be dealt with later
    {
      profile: therapistProfile.id,
      question: generalQuestions[19].id,
      answer: "",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[20].id,
      answer: "https://www.therapist-unity.co.uk",
    },
    // END OF SUPPORT DETAILS SECTION
    // START OF AVAILABILITY AND BOOKING SECTION
    {
      profile: therapistProfile.id,
      question: generalQuestions[21].id,
      answer: ["Local", "National", "Online"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[22].id,
      answer: "Paid",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[23].id,
      answer: {
        Monday: ["Morning", "Evening"],
        Tuesday: ["Morning", "Afternoon", "Evening"],
        Thursday: ["Morning"],
        Friday: ["Morning", "Evening"],
        Saturday: ["Overnight"],
      },
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[24].id,
      answer: "",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[25].id,
      answer: ["English", "Arabic"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[26].id,
      answer: "Please contact us via our website or directly via phone",
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[27].id,
      answer: ["All"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[28].id,
      answer: ["Individuals"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[29].id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[30].id,
      answer: ["Female", "Male"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[31].id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[32].id,
      answer: [
        "White Irish",
        "White Gypsy or Irish Traveller",
        "White and Black Caribbean",
        "White and Black African",
        "White and Asian",
        "Indian",
        "Pakistani",
        "Bangladeshi",
        "Chinese",
        "African",
        "Caribbean",
        "Arab",
      ],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[33].id,
      answer: ["Christian", "Buddhist", "Hindu", "Jewish", "Muslim", "Sikh"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[34].id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[35].id,
      answer: [
        "Employed",
        "Unemployed (seeking work)",
        "Unemployed (not seeking work)",
        "Self-employed",
      ],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[36].id,
      answer: [
        "Environment and agriculture",
        "Financial and insurance services",
        "Healthcare",
        "Hospitality and events management",
        "Information technology",
        "Law",
        "Law enforcement and security",
        "Media and internet",
        "Performing arts",
        "Religious services",
        "Retail",
        "Sales",
        "Science and pharmaceuticals",
        "Social care",
      ],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[37].id,
      answer: [
        "Family without children",
        "Step family",
        "No family of my own",
        "I have been adopted or fostered",
      ],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[38].id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile.id,
      question: generalQuestions[39].id,
      answer: ["Mental health problem(s)"],
    },
    // END OF TARGET CLIENT SECTION
    // START OF QUESTIONS SPECIFICALLY FOR THERAPISTS
    // START OF SUPPORT DETAILS
    {
      profile: therapistProfile.id,
      question: therapistQuestions[0].id,
      answer: "We are The Therapists for you in London.",
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[1].id,
      answer: "5",
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[2].id,
      answer: "Therapist Association, AFH231, London Therapist Unity",
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[3].id,
      answer: [
        "Emotional Therapist Qualification Certificate 2014 and 2018",
        "Feel Good Association Gold Medal",
      ],
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[4].id,
      answer: ["Family/marriage /systemic", "Feminist therapy", "Hypnotherapy"],
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[5].id,
      answer: "Head of Testing for My Pickle",
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[6].id,
      answer: [
        "Schizophrenia",
        "Seasonal affective disorder (SAD)",
        "Self-harm",
        "Tardive dyskinesia",
      ],
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[7].id,
      answer: "Over £150",
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[8].id,
      answer: [
        "Freedom Healthnet",
        "General & Medical",
        "Health Assured",
        "Health-on-Line Company (UK) Ltd",
        "National Assurance",
        "Saga",
        "The Exeter",
      ],
    },
    {
      profile: therapistProfile.id,
      question: therapistQuestions[9].id,
      answer: "6 weeks or over",
    },
  ])

  // create answers for general user
  const generalUserAnswers = await ProfileAnswer.insertMany([
    // ADMIN AREA ANSWERS
    {
      profile: generalProfile.id,
      question: generalQuestions[0].id,
      answer: ["Financial", "Emotional"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[1].id,
      answer: "Financial Advisers London Co",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[2].id,
      answer: { address: "66 Chelsea Lane", city: "London", postcode: "W28 93W" },
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[3].id,
      answer: "FAAF: 123456FD788, DAAD: 24DAW2599",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[4].id,
      answer: ["Financial support", "Guidance and advice"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[5].id,
      answer: "Financial Advisors London Co",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[6].id,
      answer: "private sector (for profit)",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[7].id,
      answer: "https://www.fa-london.co.uk",
    },
    // profile picture to be dealt with later
    {
      profile: generalProfile.id,
      question: generalQuestions[8].id,
      answer: "",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[9].id,
      answer: "We offer finacial advise to people in need. Effective,clear, low rates.",
    },
    // END OF THE INITIAL REGISTRATION PROCESS
    // START OF SOCIAL SECTION
    {
      profile: generalProfile.id,
      question: generalQuestions[10].id,
      answer: "https://www.facebook.com/fa-london-co",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[11].id,
      answer: "https://www.twitter.com/fa-london-co",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[12].id,
      answer: "https://www.instagram.com/fa-london-co",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[13].id,
      answer: "https://www.linkedin.com/fa-london-co",
    },
    // END OF SOCIAL SECTION
    // START OF SUPPORT DETAILS
    {
      profile: generalProfile.id,
      question: generalQuestions[14].id,
      answer: "financial advise: effective, for everyone",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[15].id,
      answer: [
        "Communication",
        "Life challenges",
        "Personal development",
        "Debt & poverty",
        "Education & Employability",
      ],
    },
    // {
    //   profile: generalProfile.id,
    //   question: generalQuestions[16].id,
    //   answer:
    //     "For everyone in need and people who cannot afford to seek financial advice from standard financial consultants",
    // },
    // {
    //   profile: generalProfile.id,
    //   question: generalQuestions[17].id,
    //   answer: ["Face to face & local", "Online e.g web chat", "Home visit"],
    // },
    // {
    //   profile: generalProfile.id,
    //   question: generalQuestions[18].id,
    //   answer: "None",
    // },
    // profile pic to be dealt with later
    {
      profile: generalProfile.id,
      question: generalQuestions[19].id,
      answer: "",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[20].id,
      answer: "https://www.finance-charities.co.uk",
    },
    // END OF SUPPORT DETAILS SECTION
    // START OF AVAILABILITY AND BOOKING SECTION
    {
      profile: generalProfile.id,
      question: generalQuestions[21].id,
      answer: ["Local", "National", "Online"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[22].id,
      answer: "Mix of free and paid",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[23].id,
      answer: {
        Monday: ["Morning", "Evening"],
        Tuesday: ["Morning", "Afternoon", "Evening"],
        Thursday: ["Morning"],
        Friday: ["Morning", "Evening"],
        Saturday: ["Overnight"],
      },
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[24].id,
      answer: "11-12-2034",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[25].id,
      answer: ["German", "English", "Arabic"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[26].id,
      answer: "Please contact us via our website or directly via phone",
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[27].id,
      answer: ["All"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[28].id,
      answer: ["Individuals", "Groups"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[29].id,
      answer: ["20-29", "30-29", "40-49", "50-59"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[30].id,
      answer: ["All – no preference"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[31].id,
      answer: ["All – no preference"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[32].id,
      answer: ["Indian", "Pakistani", "Bangladeshi", "African", "Caribbean", "Arab"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[33].id,
      answer: ["Buddhist", "Hindu", "Jewish", "Muslim", "Sikh"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[34].id,
      answer: [
        "Developmental e.g. downs syndrome, cerebral palsy",
        "Physical or sensory e.g. mobility, visual or hearing impairment",
      ],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[35].id,
      answer: [
        "Employed",
        "Unemployed (seeking work)",
        "Unemployed (not seeking work)",
        "Self-employed",
      ],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[36].id,
      answer: [
        "Business, consulting and management",
        "Charity and voluntary work",
        "Education and teacher training",
        "Energy and utilities",
        "Engineering and manufacturing",
        "Environment and agriculture",
        "Financial and insurance services",
        "Recruitment and HR",
        "Religious services",
        "Retail",
        "Sales",
      ],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[37].id,
      answer: [
        "Family without children",
        "Step family",
        "No family of my own",
        "I have been adopted or fostered",
      ],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[38].id,
      answer: ["Single", "In a relationship", "Separated", "Divorced", "Widowed"],
    },
    {
      profile: generalProfile.id,
      question: generalQuestions[39].id,
      answer: [
        "Cancer",
        "Chronic pain",
        "Arthritis",
        "Alzheimers",
        "Parkinsons",
        "Terminal diagnosis",
      ],
    },
  ])

  console.log("Qs", generalQuestions)
  console.log("As", generalUserAnswers)

  // Check if questions and answers arrays are of the same length
  console.log("therapist questions length", therapistQuestions.length)
  console.log("therapist answers length", therapistAnswers.length)
  console.log("general questions length", generalQuestions.length)
  console.log("general answers length", generalUserAnswers.length)
}

buildDb().catch(err => console.log(err))

module.exports = buildDb
