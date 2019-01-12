const Article = require("./models/Articles")
const Category = require("./models/Category")
const Profile = require("./models/Profile")

// load dbConnection
const dbConnection = require("./db_connection")
// start Connection
dbConnection()

// build articles category collections
const buildArticleCategory = async () => {
  try {
    await Article.deleteMany({})
    await Category.deleteMany({})

    console.log("collections deleted")

    // find therapist
    const therapistProfile = await Profile.findOne({
      approved: true,
    })
    if (therapistProfile !== undefined) {
      // insert Articles Category
      const ArticlesCategory = await Category.insertMany([
        {
          article_type: "Emergency help & support",
        },
        {
          article_type: "Pregnancy & post-birth",
        },
        {
          article_type: "Children & Families",
        },
        {
          article_type: "Divorce & separation",
        },
        {
          article_type: "Infertility",
        },
        {
          article_type: "Loss & bereavement",
        },
        {
          article_type: "Crime & abuse",
        },
        {
          article_type: "chronic illness",
        },
        {
          article_type: "stress at work",
        },
        {
          article_type: "depression",
        },
      ])

      // Articles Category length
      console.log("Articles Category length", ArticlesCategory.length)

      // Articles related with category
      const Articles = await Article.insertMany([
        {
          title: "Low mood and depression",
          image: "low-mood.jpg",
          content: `But a low mood will tend to lift after a few days or weeks.
        Making some small changes in your life, such as resolving a difficult situation, talking about your problems or getting more sleep, can usually improve your mood.

        A low mood that doesn't go away can be a sign of depression.

        Symptoms of depression can include the following:

        low mood lasting 2 weeks or more
        not getting any enjoyment out of life
        feeling hopeless
        feeling tired or lacking energy
        not being able to concentrate on everyday things like reading the paper or watching television
        comfort eating or losing your appetite
        sleeping more than usual or being unable to sleep
        having suicidal thoughts or thoughts about harming yourself
        `,
          profile: therapistProfile._id,
          category: [ArticlesCategory[6]._id, ArticlesCategory[7]._id, ArticlesCategory[8]._id],
        },
        {
          title: "Anxiety in children",
          image: "anxietyChildren.jpg",
          content: `Children tend to feel anxious about different things at different ages.
        Many of these worries are a normal part of growing up.

        From about eight months to three years, for example, it's very common for young children to have something called separation anxiety.
        They may become clingy and cry when separated from their parents or carers.
        This is a normal stage in children's development and tends to ease off at around age two to three.

        It's also common for pre-school children to develop specific fears or phobias.
        Common fears in early childhood include animals, insects, storms, heights, water, blood, and the dark.
        These fears usually go away gradually on their own.

        Throughout a child's life there will be other times when they feel anxiety.
        Lots of children feel anxious when going to a new school, for example, or before tests and exams.
        Some children feel shy in social situations and may need support with this.
        `,
          profile: therapistProfile._id,
          category: [ArticlesCategory[2]._id],
        },
        {
          title: "How to deal with stress",
          image: "",
          content: `Stress causes physical changes in the body designed to help you take on threats or difficulties.

        You may notice that your heart pounds, your breathing quickens, your muscles tense, and you start to sweat.
        This is sometimes known as the fight or flight response.

        Once the threat or difficulty passes, these physical effects usually fade.
        But if you're constantly stressed, your body stays in a state of high alert and you may develop stress-related symptoms.
        `,
          profile: therapistProfile._id,
          category: [ArticlesCategory[2]._id],
        },
        {
          title: "I used to hit my husband",
          image: "fist_husband.jpeg",
          content: `Intense anger caused Florence Terry to hit her husband. An anger-management course helped her regain control, and changed her life.

        "The first time I hit my husband was about 14 years ago. I was cross with him and lost my temper.
        He was upset and I felt dreadful, and cried and apologised. I felt scared and ashamed, but thought it was a one-off.

        "It didn't happen again for many months, maybe as many as 18 months.
        During that time there was verbal criticism and crossness from me, but nothing violent. I can't actually remember the second time I hit him.
        I'm sorry to say it became a pattern.

        "Looking back, I was under a lot of stress from my job as a divorce lawyer, and I was packing my free time with other commitments, such as charity work."
        `,
          profile: therapistProfile._id,
          category: [ArticlesCategory[2]._id, ArticlesCategory[7]._id, ArticlesCategory[3]._id],
        },
      ])
      // Articles length
      console.log("Articles length", Articles.length)
      console.log("Categoery and Articles added successfully ")
    } else {
      console.log("there is no profile avaliable please add approved profile")
    }
  } catch (err) {
    console.log(err)
  }
}
// Run build
buildArticleCategory()

module.exports = buildArticleCategory
