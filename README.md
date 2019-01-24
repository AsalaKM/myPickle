[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
# An App related to Tech for Better
[Tech for Better](https://www.foundersandcoders.com/techforbetter/) is a pro-bono programme for nonprofits to design, test and build new digital service ideas using developers in London and Gaza.

## About the client 
My Pickle is a nonprofit social enterprise platform that helps people find support. In doing so, funds are raised to help more people access the services they need & support VCS services.

Over the course of three workshops related to the Tech for Better Programme (TfB), Cat (MyPickle 5 Founder and Product Owner) presented her ideas and goals. Cat’s basic aim was to create a platform related to Integrated Wellness. Integrated wellness addresses multiple health & wellbeing factors rather than a single issue. It is an holistic, person-centred approach and uses a combination of services, to bring together services, activities & technologies across all eight dimensions of wellness. For example, mental health support, debt advice & healthy lifestyle services.

TfB supported the concept and helped designing a Minimum Viable Product (MVP) focussing on the most relevant features and needs presented by the product owner.

## About the MVP
#### Note:
This is a Minimum Viable Product (MVP) which was designed and built over the course of 4 weeks (1 design sprint, user testing and 2 build sprints). In case the app will be developed further its important to mention that there needs to be further work on refactoring and testing the codebase. 

The app’s ambition is to create a proof-of-concept enabling the product owner to test the idea to create an Integrated Wellness Platform. 

The responsive web-app can be seen as a connector for people that are offering support and individuals looking for support. Support providers go through a sign-up process relating themselves to one or more dimensions of integrated wellness. An additional profile builder allows them to input further details such as support offerings, booking & availability and target clients. Secure authentication was managed to be set up on top of the initial planned scope meaning that each support provider can have their own unique log in, with all their data protected.

Another main feature of the app is that registered support providers can create blog posts related to their fields of expertise. This should allow users to find out more about specific topics and offer advice. Blog posts as well as profiles are related to various data categories with the aim to eventually provide filter options enabling users to find information and support in an effective manner. Moreover a very basic CMS system was embedded. Before profile listings go live they have to be approved by the product owner. 

As stated above what has been built to date is a MVP that will enable the product owner to do further user testing. 

![landing](https://user-images.githubusercontent.com/23721486/51394475-6480fb00-1b32-11e9-9426-6bfc0c568dec.png)

![findsupport](https://user-images.githubusercontent.com/23721486/51394474-6480fb00-1b32-11e9-9314-35dca6215a40.png)

##
![edit](https://user-images.githubusercontent.com/23721486/51394471-6480fb00-1b32-11e9-9f90-2e81a2896b36.png)

![dashboard](https://user-images.githubusercontent.com/23721486/51394470-63e86480-1b32-11e9-8018-dee0958d9ce3.png)

![article](https://user-images.githubusercontent.com/23721486/51394468-63e86480-1b32-11e9-9c23-513038fb2c82.png)

![createarticle](https://user-images.githubusercontent.com/23721486/51394469-63e86480-1b32-11e9-9209-c3088b690542.png)

![profile](https://user-images.githubusercontent.com/23721486/51394479-65199180-1b32-11e9-96cc-013dcafddf0f.png)

## Workflow summary
December 10th-14th
Meet and greet between the London and Gaza teams, discussing personal project goals, setting up user manuals, final client workshop in London including Gaza-team via Google hangouts, design-phase (initial wireframing, prototyping), user testing, agreeing on preferred tech-stack.

December 17th-21st
Core-sprint: set up project environment, create basic features (e.g. sign up process, authentication, profile builder, profile editor, blog) 

January 7th-11th
Core+-sprint: debugging, design features, image-upload, filter, cms-system

## Future Sprints:
Considering overall goals of the product, we thought it would also be useful to have a number of suggestions for what we would recommend for the most immediate future sprints, whether this would be with us or other developers:

### Create more tests for codebase 
As mentioned above, this is crucial to make the app future proof and avoid quickly racking up technical debt.
Full user authentication
We are very happy that we managed to build very secure authentication, which was a bonus feature for this sprint. However, we would want to make even more secure with password recovery to make it fully usable for users beyond the user testing you are doing next. 
### Search filters
Whilst we ran out of time on this sprint to push it live, we have started building the functionality for a filter based on wellness type. This can be finished and developed further with users being able to filter based on multiple factors (e.g. location, price)
### User log in
So we can start building in further interactions (e.g. messaging providers on the platform, liking content), we need to build a log in and profile set up for users for are looking for support
### Content Management System
We have built some initial content management functionality. This can be massively developed to include deleting profiles, emailing users, deleting articles etc. 
### Content enhancement
There is a lot more that can be done to make the platform ‘stickier’ for users - share function for articles on social media, upvoting/downvoting content, embedding video content for blog posts, commenting on blog posts, reviewing support providers.
### SEO
With this sort of platform, search engine optimisation is a crucial way to attract more users. We can look at optimising the content on the platform for this and include digital marketing features such as analytics and SEO frameworks. 


## Team
My Pickle was the second application built within the TfB graduate program which can be seen as an ongoing effort to establish long-term relations between developers from London and Gaza in order to work on client projects in an agile way. 
![ext-1](https://user-images.githubusercontent.com/23721486/51394472-6480fb00-1b32-11e9-85ee-946d3946604a.jpg)
![ext](https://user-images.githubusercontent.com/23721486/51394473-6480fb00-1b32-11e9-8807-cb4396f60b0e.jpg)

### Four Developers were involved 
[Ismail](https://github.com/ismail2009) | [Haneen](https://github.com/hshahwan) | [Simon](https://github.com/dupreesi) | [Joe](https://github.com/thejoefriel)

## Tech Stack
| Core | Testing | Other |
| - | -------- | -------- |
|Node|jest|babel
|Express|supertest|passport
|React|eslint|axios
|MongoDB|react-testing-library|serve-favicon|
|HTML|nodemon|env2|
|CSS|concurrently|Tachyons|
|Styled-Components|||

## Summary
The remote working process went well and we gained valuable insights. We used those experiences and are currently designing guidelines in terms of remote working process and project management for our upcoming project and especially for future grads. The communication between the developers and the product owner was good. The final product included all core features and a high number of core+ features. The product handover went smoothly and the Product Owner was really pleased with the MVP. 

## Getting Started
How to get a copy of the project up and running on your local machine.

*Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp.*
> **Node** (via nvm recomended)
> see: https://github.com/creationix/nvm

> **MongoDB**
> see: https://docs.mongodb.com/manual/installation/

### Setup

#### 1. Clone the repo:
```
$ git clone https://github.com/techforbetter/myPickle.git
```
#### 2. Install Dependencies 
```
$ npm run both:init
```

#### 3. Get Mongo running on your local computer
Connect to mongo in a separate terminal tab/window.
```
$ mongod
```

#### 4. Add some more Environment Variables
Create a `config.env` file in the root.

Add these👇 lines to the file, to make your local databases work, inserting your own psql username and password.
```
mongoURI= mongodb://localhost:27017/mypickledb
mongoURI_TEST= mongodb://localhost:27017/mypickledb_TEST
```
Add a 'Secret' for password encryption.
```
SECRET = "[SOMETHING SECRET]"
```

#### 5. Build the Database
Use this script that runs dummy_data_build.js to set up your survey questions and put in some inital dummy data
```
$ npm run build:dummyData
```

#### 6. Run the Tests
To make sure everything is working as it should.

```
$ npm run test:both
```

#### 7. Run the Server
```
$ npm run dev:both
```
Wait for a `compiled successfully` message.

#### 8. Have Fun
The webapp should now be running on
```localhost:3000```
Now you can play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.
