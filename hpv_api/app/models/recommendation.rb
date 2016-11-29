class Recommendation < ApplicationRecord
  def self.make_new(answers)
    recommendation_generating_algorithm(answers)
  end

  private

  def self.recommendation_generating_algorithm(answers)
       #Will be replaced with actual algorithm when mentor supplies one
      answers.each do |answer|
        rec = Recommendation.create({content: answer.to_s, completed: true})
        return false if !rec.valid?
      end
      true
  end
end
