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

dbConnection()

const buildDb = async () => {
  //clear collections
  await User.deleteMany({})
  await SupportType.deleteMany({})
  await Profile.deleteMany({})
  await ProfileQuestion.deleteMany({})

  console.log("collections deleted")

  // insert profile questions
  await buildProfileQuestions()

  // insert users
  // therapist
  const therapist = new User({
    name: "Josephine Doeski",
    phone: "004407566683",
    email: "josephine@the-therapists.co.uk",
    address: "66 Moaning Road E50DW London",
    password: "123456",
  })
  await therapist.save()
  console.log("user (therapist) added")

  // general user
  const generalUser = new User({
    name: "Henry Poundinger",
    phone: "004407565473",
    email: "henry@financial-advice.co.uk",
    address: "66 Chelsea Lane W2893W London",
    password: "123456",
  })
  await generalUser.save()
  console.log("user (general) added")

  // get support type of therapists
  const supportTypeTherapist = await SupportType.findOne({ type: "Therapist" })

  // get support type of general users
  const supportTypeGeneral = await SupportType.findOne({ type: "General" })

  // create new profile for user with support type therapist and user_id as foreign keys
  const therapistProfile = new Profile({
    supportType: supportTypeTherapist._id,
    user: therapist._id,
    approved: true,
  })

  await therapistProfile.save()
  console.log("therapist profile added")

  // create new profile for user with support type general and user_id as foreign keys
  const generalProfile = new Profile({
    supportType: supportTypeGeneral._id,
    user: generalUser._id,
    approved: true,
  })

  await generalProfile.save()
  console.log("general profile added")

  // get all profile questions related to therapist type
  const therapistQuestions = await ProfileQuestion.find({ supportType: supportTypeTherapist._id })
  // get all profile questions related to general type
  const generalQuestions = await ProfileQuestion.find({ supportType: supportTypeGeneral._id })

  // create answers for therapist
  const therapistAnswers = await ProfileAnswer.insertMany([
    // ADMIN AREA ANSWERS
    {
      profile: therapistProfile._id,
      question: generalQuestions[0]._id,
      answer: ["Emotional", "Social", "Spiritual"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[1]._id,
      answer: "The Therapists London",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[2]._id,
      answer: "66 Moaning Road E50DW London",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[3]._id,
      answer: "JUWH: AKFAFD788, DAAD: 24FRHUW9, THAK: ASLW20401",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[4]._id,
      answer: [
        "Qualified therapy or counselling service",
        "Guidance and advice",
        "Self-help",
        "Activities",
      ],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[5]._id,
      answer: "The Therapists London",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[6]._id,
      answer: "private sector (for profit)",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[7]._id,
      answer: "https://www.therapists-london.co.uk",
    },
    //profile picture to be dealt with later
    {
      profile: therapistProfile._id,
      question: generalQuestions[8]._id,
      answer: "",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[9]._id,
      answer: "We would love to hear your story and offer individual support",
    },
    // END OF THE INITIAL REGISTRATION PROCESS
    // START OF SOCIAL SECTION
    {
      profile: therapistProfile._id,
      question: generalQuestions[10]._id,
      answer: "https://www.facebook.com/therapists-london",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[11]._id,
      answer: "https://www.twitter.com/therapists-london",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[12]._id,
      answer: "https://www.instagram.com/therapists-london",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[13]._id,
      answer: "https://www.linkedin.com/therapists-london",
    },
    // END OF SOCIAL SECTION
    // START OF SUPPORT DETAILS
    {
      profile: therapistProfile._id,
      question: generalQuestions[14]._id,
      answer: "We are there for you",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[15]._id,
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
      profile: therapistProfile._id,
      question: generalQuestions[16]._id,
      answer: "For everyone who faces anxiety and stress and need emotional support",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[17]._id,
      answer: ["Face to face & local", "Online e.g web chat", "Home visit"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[18]._id,
      answer: "Other",
    },
    // profile pic to be dealt with later
    {
      profile: therapistProfile._id,
      question: generalQuestions[19]._id,
      answer: "",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[20]._id,
      answer: "https://www.therapist-unity.co.uk",
    },
    // END OF SUPPORT DETAILS SECTION
    // START OF AVAILABILITY AND BOOKING SECTION
    {
      profile: therapistProfile._id,
      question: generalQuestions[21]._id,
      answer: ["Local", "National", "Online"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[22]._id,
      answer: "Paid",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[23]._id,
      answer: {
        Monday: "Morning, Evening",
        Tuesday: "Morning, Afternoon, Evening",
        Thursday: "Morning, Afternoon, Evening",
        Friday: "Morning, Afternoon, Evening",
        Saturday: "Overnight",
      },
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[24]._id,
      answer: "",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[25]._id,
      answer: ["English", "Arabic"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[26]._id,
      answer: "Please contact us via our website or directly via phone",
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[27]._id,
      answer: ["All"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[28]._id,
      answer: ["Individuals"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[29]._id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[30]._id,
      answer: ["Female", "Male"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[31]._id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[32]._id,
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
      profile: therapistProfile._id,
      question: generalQuestions[33]._id,
      answer: ["Christian", "Buddhist", "Hindu", "Jewish", "Muslim", "Sikh"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[34]._id,
      answer: ["All – no preference"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[35]._id,
      answer: [
        "Employed",
        "Unemployed (seeking work)",
        "Unemployed (not seeking work)",
        "Self-employed",
      ],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[36]._id,
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
      profile: therapistProfile._id,
      question: generalQuestions[37]._id,
      answer: [
        "Family without children",
        "Step family",
        "No family of my own",
        "I have been adopted or fostered",
      ],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[38]._id,
      answer: ["All - no preference"],
    },
    {
      profile: therapistProfile._id,
      question: generalQuestions[39]._id,
      answer: ["All – no preference"],
    },
    // END OF TARGET CLIENT SECTION
    // START OF QUESTIONS SPECIFICALLY FOR THERAPISTS
    // START OF SUPPORT DETAILS
    {
      profile: therapistProfile._id,
      question: therapistQuestions[0]._id,
      answer: "We are The Therapists for you in London.",
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[1]._id,
      answer: "5",
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[2]._id,
      answer: "Therapist Association, AFH231, London Therapist Unity",
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[3]._id,
      answer: [
        "Emotional Therapist Qualification Certificate 2014 and 2018",
        "Feel Good Association Gold Medal",
      ],
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[4]._id,
      answer: ["Family/marriage /systemic", "Feminist therapy", "Hypnotherapy"],
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[5]._id,
      answer: "Head of Testing for My Pickle",
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[6]._id,
      answer: [
        "Schizophrenia",
        "Seasonal affective disorder (SAD)",
        "Self-harm",
        "Tardive dyskinesia",
      ],
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[7]._id,
      answer: "Over £150",
    },
    {
      profile: therapistProfile._id,
      question: therapistQuestions[8]._id,
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
      profile: therapistProfile._id,
      question: therapistQuestions[9]._id,
      answer: "6 weeks or over",
    },
  ])

  // create answers for general user
  const generalUserAnswers = await ProfileAnswer.insertMany([
    // ADMIN AREA ANSWERS
    {
      profile: generalProfile._id,
      question: generalQuestions[0]._id,
      answer: ["Financial", "Emotional"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[1]._id,
      answer: "Financial Advisers London Co",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[2]._id,
      answer: "66 Chelsea Lane W2893W London",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[3]._id,
      answer: "FAAF: 123456FD788, DAAD: 24DAW2599",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[4]._id,
      answer: ["Financial support", "Guidance and advice"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[5]._id,
      answer: "Financial Advisors London Co",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[6]._id,
      answer: "private sector (for profit)",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[7]._id,
      answer: "https://www.fa-london.co.uk",
    },
    //profile picture to be dealt with later
    {
      profile: generalProfile._id,
      question: generalQuestions[8]._id,
      answer: "",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[9]._id,
      answer: "We offer finacial advise to people in need. Effective,clear, low rates.",
    },
    // END OF THE INITIAL REGISTRATION PROCESS
    // START OF SOCIAL SECTION
    {
      profile: generalProfile._id,
      question: generalQuestions[10]._id,
      answer: "https://www.facebook.com/fa-london-co",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[11]._id,
      answer: "https://www.twitter.com/fa-london-co",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[12]._id,
      answer: "https://www.instagram.com/fa-london-co",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[13]._id,
      answer: "https://www.linkedin.com/fa-london-co",
    },
    // END OF SOCIAL SECTION
    // START OF SUPPORT DETAILS
    {
      profile: generalProfile._id,
      question: generalQuestions[14]._id,
      answer: "financial advise: effective, for everyone",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[15]._id,
      answer: [
        "Communication",
        "Life challenges",
        "Personal development",
        "Debt & poverty",
        "Education & Employability",
      ],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[16]._id,
      answer:
        "For everyone in need and people who cannot afford to seek financial advice from standard financial consultants",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[17]._id,
      answer: ["Face to face & local", "Online e.g web chat", "Home visit"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[18]._id,
      answer: "None",
    },
    // profile pic to be dealt with later
    {
      profile: generalProfile._id,
      question: generalQuestions[19]._id,
      answer: "",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[20]._id,
      answer: "https://www.finance-charities.co.uk",
    },
    // END OF SUPPORT DETAILS SECTION
    // START OF AVAILABILITY AND BOOKING SECTION
    {
      profile: generalProfile._id,
      question: generalQuestions[21]._id,
      answer: ["Local", "National", "Online"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[22]._id,
      answer: "Mix of free and paid",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[23]._id,
      answer: {
        Monday: "Morning, Afternoon, Evening",
        Tuesday: "Morning, Afternoon, Evening",
        Wednesday: "Morning, Afternoon, Evening",
        Thursday: "Morning, Afternoon, Evening",
        Friday: "Morning, Afternoon, Evening",
        Saturday: "Overnight",
      },
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[24]._id,
      answer: "11-12-2034",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[25]._id,
      answer: ["German", "English", "Arabic"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[26]._id,
      answer: "Please contact us via our website or directly via phone",
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[27]._id,
      answer: ["All"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[28]._id,
      answer: ["Individuals", "Groups"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[29]._id,
      answer: ["20-29", "30-29", "40-49", "50-59"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[30]._id,
      answer: ["All – no preference"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[31]._id,
      answer: ["All – no preference"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[32]._id,
      answer: ["Indian", "Pakistani", "Bangladeshi", "African", "Caribbean", "Arab"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[33]._id,
      answer: ["Buddhist", "Hindu", "Jewish", "Muslim", "Sikh"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[34]._id,
      answer: [
        "Developmental e.g. downs syndrome, cerebral palsy",
        "Physical or sensory e.g. mobility, visual or hearing impairment",
      ],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[35]._id,
      answer: [
        "Employed",
        "Unemployed (seeking work)",
        "Unemployed (not seeking work)",
        "Self-employed",
      ],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[36]._id,
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
      profile: generalProfile._id,
      question: generalQuestions[37]._id,
      answer: [
        "Family without children",
        "Step family",
        "No family of my own",
        "I have been adopted or fostered",
      ],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[38]._id,
      answer: ["Single", "In a relationship", "Separated", "Divorced", "Widowed"],
    },
    {
      profile: generalProfile._id,
      question: generalQuestions[39]._id,
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


  // Check if questions and answers arrays are of the same length
  console.log("therapist questions length", therapistQuestions.length)
  console.log("therapist answers length", therapistAnswers.length)
  console.log("general questions length", generalQuestions.length)
  console.log("general answers length", generalUserAnswers.length)
}

buildDb().catch(err => console.log(err))

module.exports = buildDb
