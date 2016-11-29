# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#questions = Question.create([{title: "Question 1", content: "How much does this suck?"}, {title: "Question 2", content: "Does this suck a lot?"}, {title: "Question 3", content: "Or does this suck a whole whole lot?"}])
#recommendations = Recommendation.create({content: "Testing123", completed: false})
users = User.create!({email: "test@test.com", password: "not_correct", password_confirmation: "not_correct"})