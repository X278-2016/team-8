# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


questions = Question.create!([{title: "Question 1", content: "Carrying out quality improvement cycles, focused on adolescent vaccines."}, {title: "Question 2", content: "Carrying out quality improvement cycles, focused on any topic"}, {title: "Question 3", content: "A designated person pulls practice-level reports of adolescent immunization rates and shares them with the providers and staff within the practice."}, {title: "Question 4", content: "Based on periodic immunization reports, the providers discuss and agree upon strategies to improve adolescent immunization rates."}, {title: "Question 5", content: "Provider makes a strong recommendation for HPV vaccine"}, {title: "Question 6", content: "Adolescent vaccine recommendations are bundled at the same visit."}, {title: "Question 7", content: "Remind parents of appointments for children to receive 2nd and 3rd doses of HPV vaccine."}, {title: "Question 8", content: "Provide anticipatory guidance about adolescent vaccines to parents/patients."}, {title: "Question 9", content: "Remind parents when children are due/overdue for adolescent vaccines and/or well visits."}, {title: "Question 10", content: "Routinely offer adolescent vaccines during non-well visits."}])
users = User.create!({email: "test@test.com", password: "password", password_confirmation: "password"})